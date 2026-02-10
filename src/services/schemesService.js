import { db } from "./firebase"
import {
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore"

// Fetch all schemes
export async function getAllSchemes() {
  const querySnapshot = await getDocs(
    collection(db, "schemes")
  )

  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }))
}

// Fetch single scheme by ID
export async function getSchemeById(id) {
  const docRef = doc(db, "schemes", id)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) return null

  return {
    id: docSnap.id,
    ...docSnap.data(),
  }
}
