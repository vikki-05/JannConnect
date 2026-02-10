import { db } from "./firebase"
import { doc, setDoc } from "firebase/firestore"

// Paste your schemes array here
const schemes = [
  {
    id: "SCH021",
    name: "National Action Plan for Drug Demand Reduction (NAPDDR)",
    type: "ngo",
    targetGroup: ["substance_abuse"],
    states: ["All"],
    eligibility: {},
    benefits:
      "Counselling, rehabilitation, awareness programmes, de-addiction support.",
    documentsRequired: [],
    applicationProcess: [
      "Apply via NGO or hospital",
      "Counselling",
      "Rehabilitation",
    ],
    applyLink: "https://socialjustice.gov.in/schemes/42",
    simpleExplanation: {
      en: "Helps people recover from alcohol and drug addiction.",
      hi: "नशा मुक्ति और पुनर्वास सहायता।",
    },
  },

  {
    id: "SCH022",
    name: "NITI Internship Scheme",
    type: "government",
    targetGroup: ["student"],
    states: ["All"],
    eligibility: { minAge: 18 },
    benefits:
      "Policy exposure + internship completion certificate.",
    documentsRequired: ["Marksheets", "NOC"],
    applicationProcess: [
      "Apply online (1–10 every month)",
      "Selection",
      "Internship",
    ],
    applyLink: "https://www.myscheme.gov.in/schemes/niti-i",
    simpleExplanation: {
      en:
        "Government internship for undergraduate and postgraduate students.",
      hi: "छात्रों के लिए नीति आधारित सरकारी इंटर्नशिप।",
    },
  },

  {
    id: "SCH023",
    name: "National Means-cum-Merit Scholarship Scheme (NMMSS)",
    type: "government",
    targetGroup: ["student"],
    states: ["All"],
    eligibility: { maxIncome: 350000 },
    benefits:
      "₹12,000 yearly scholarship for Class 9–12 students.",
    documentsRequired: [
      "Aadhaar",
      "Income Certificate",
      "Marksheets",
    ],
    applicationProcess: ["Apply on NSP portal"],
    applyLink: "https://scholarships.gov.in",
    simpleExplanation: {
      en:
        "Scholarship for bright students from poor families.",
      hi: "गरीब परिवारों के मेधावी छात्रों के लिए छात्रवृत्ति।",
    },
  },

  // (keep rest exactly as you pasted)
]

// Upload function
export async function uploadSchemesToFirestore() {
  try {
    for (const scheme of schemes) {
      const { id, ...data } = scheme
      await setDoc(doc(db, "schemes", id), data)
      console.log(`Uploaded ${id}`)
    }

    console.log("✅ All schemes uploaded successfully")
  } catch (error) {
    console.error("❌ Upload failed:", error)
  }
}
