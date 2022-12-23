import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  try {
    const jateDb = await openDB('JATE', 1);
    const transactionJate = jateDb.transaction('JATE', 'readwrite');
    const jateObjectStore = transactionJate.objectStore('JATE');
    const putRequest = jateObjectStore.put({id: id, text: content});
    const result = await putRequest; 
    console.log('saved', result);
  } catch {
    console.error('not saved. putDb not implemented');
  }
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try {
    const jateDb = await openDB('JATE', 1); 
    const transactionJate = jateDb.transaction('JATE', 'readonly'); 
    const jateObjectStore = transactionJate.objectStore('JATE');
    const getAllRequest = jateObjectStore.getAll(); 
    const result = await getAllRequest; 
    return result;
  } catch {
    console.error('error with getAll request. getDb not implemented');
  }
}

initdb();
