import { collection, addDoc, doc, setDoc } from 'firebase/firestore'
import { ref } from 'vue'

import { getDB } from '~/firebase/fireinit'
export const useFirestore = () => {
  const path = ref('')
  const error = ref('')

  function getCollection() {
    return collection(getDB(), path.value)
  }
  function clearError() {
    error.value = ''
  }

  function setPath(newPath) {
    path.value = newPath
  }
  /**
   *
   * @param d document
   * @returns {Promise<string>} Promise with the id
   */
  async function add(d) {
    const docRef = await addDoc(getCollection(), d)
    return docRef.id
  }

  function getDocRef(id) {
    return doc(getCollection(), id)
  }

  async function update(id, changes) {
    await setDoc(getDocRef(id), changes, { merge: true })
  }

  return {
    path,
    error,
    setPath,
    clearError,
    add,
    update,
    getCollection,
    getDocRef,
  }
}