// Функція для симулювання асинхронного запиту до сервера
// Function to simulate an asynchronous request to the server
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 1000);
  });
}

// Функція для обробки отриманих даних
// Function for processing received data
function processAndTransformData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const transformedData = data.toUpperCase().replaceAll(" ", "-");
      resolve(transformedData);
    }, 2000);
  });
}

// Функція для збереження даних до бази даних
// Function to save data to the database
function saveToDatabase(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Симулюємо збереження даних до бази даних
      resolve('Data saved to the database');
    }, 1500);
  });
}

async function main() {
  try {
    // await - 1
    const data = await fetchData();
    console.log('Data received:', data);

    // await - 2
    const transformedData = await processAndTransformData(data);
    console.log('Transformed data:', transformedData);

    // await - 3
    const result = await saveToDatabase(transformedData);
    console.log(result);

    // Додаткові асинхронні операції або продовження ланцюга
    // Additional asynchronous operations or chain continuation
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
