import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useLanguage } from "../context/LanguageContext"
import { getSchemeById } from "../services/schemesService"

export default function SchemeDetails() {
  const { id } = useParams()
  const { t, lang } = useLanguage()

  const [scheme, setScheme] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    async function fetchScheme() {
      const data = await getSchemeById(id)
      setScheme(data)
      setLoading(false)
    }

    fetchScheme()
  }, [id])

  if (loading) return <p>Loading scheme…</p>
  if (!scheme) return <p>Scheme not found</p>

  const tabs = [
    { key: "overview", label: t.overview },
    { key: "benefits", label: t.benefits },
    { key: "eligibility", label: t.eligibility },
    { key: "documents", label: t.documents },
    { key: "steps", label: t.howToApply },
  ]

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold">
        {scheme.name}
      </h1>

      <p className="text-gray-500 mt-2">
        {scheme.states?.join(", ") || "All India"}
      </p>

      <div className="flex flex-wrap gap-3 mt-8">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded ${
              activeTab === tab.key
                ? "bg-green-500 text-black"
                : "border"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-8 border rounded-xl p-6">
        {activeTab === "overview" && (
          <p>
            {scheme.simpleExplanation?.[lang]}
          </p>
        )}

        {activeTab === "benefits" && (
          <p>{scheme.benefits}</p>
        )}

        {activeTab === "eligibility" && (
          <ul className="list-disc ml-6">
            {Object.keys(scheme.eligibility || {})
              .length ? (
              Object.entries(
                scheme.eligibility
              ).map(([k, v], i) => (
                <li key={i}>
                  {k}:{" "}
                  {Array.isArray(v)
                    ? v.join(", ")
                    : v}
                </li>
              ))
            ) : (
              <li>No eligibility conditions</li>
            )}
          </ul>
        )}

        {activeTab === "documents" && (
          <ul className="list-disc ml-6">
            {scheme.documentsRequired?.length
              ? scheme.documentsRequired.map(
                  (d, i) => (
                    <li key={i}>{d}</li>
                  )
                )
              : "No documents required"}
          </ul>
        )}

        {activeTab === "steps" && (
          <ol className="list-decimal ml-6">
            {scheme.applicationProcess?.map(
              (s, i) => (
                <li key={i}>{s}</li>
              )
            )}
          </ol>
        )}
      </div>

      {scheme.applyLink && (
        <button
          onClick={() =>
            window.open(scheme.applyLink, "_blank")
          }
          className="mt-10 px-6 py-3 bg-green-500 text-black rounded font-semibold"
        >
          {t.applyNow}
        </button>
      )}
    </section>
  )
}
