const STORAGE_KEY = "tu-do-list";

export function getData() {
  try {
    const localData = localStorage.getItem(STORAGE_KEY);
    return localData ? JSON.parse(localData) : [];
  } catch (error) {
    console.log(error);
  }
}

export function saveData(data) {
  const array = getData();
  array.push(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(array));
}
