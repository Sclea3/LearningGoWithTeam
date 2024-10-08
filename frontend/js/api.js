const API_URL = 'http://localhost:5000/api'; // Убедитесь, что это соответствует вашему бэкенду

export const fetchRates = async (date, currency) => {
    const url = `${API_URL}/rates?date=${date}&currency=${currency}`;
    console.log(`URL запроса: ${url}`); // Проверка формируемого URL

    try {
        const response = await fetch(url);
        console.log("Статус ответа:", response.status); // Проверка статуса ответа
        if (response.ok) {
            const data = await response.json();
            return data.rates;
        } else {
            throw new Error('Ошибка сети: ' + response.statusText);
        } // Предполагается, что API возвращает объект с полем "rates"
    } catch (error) {
        console.error("Ошибка при получении курсов валют:", error);
        return []; // Возвращаем пустой массив при ошибке
    }
};
