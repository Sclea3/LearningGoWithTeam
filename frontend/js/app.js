import { fetchRates } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    const fetchRatesButton = document.getElementById('fetchRates');
    console.log("Кнопка найдена:", fetchRatesButton); // Проверка существования кнопки

    const dateSelector = document.getElementById('dateSelector');
    const currencyPair = document.getElementById('currencyPair');

    fetchRatesButton.addEventListener('click', async () => {
        console.log("Кнопка нажата"); // Проверка срабатывания обработчика
        const selectedDate = dateSelector.value;
        const selectedCurrency = currencyPair.value;

        if (!selectedDate) {
            alert("Пожалуйста, выберите дату.");
            return;
        }

        console.log("Запрос на получение курсов валют для даты:", selectedDate, "и валюты:", selectedCurrency);

        // Отправка запроса и обработка результата
        const rates = await fetchRates(selectedDate, selectedCurrency);
        console.log("Функция fetchRates вызвана"); // Проверка вызова функции
        if (rates.length === 0) {
            alert("Не удалось получить курсы валют. Пожалуйста, убедитесь, что сервер работает.");
        } else {
            updateRatesTable(rates);
        }
    });
});

const updateRatesTable = (rates) => {
    const ratesTableBody = document.getElementById('ratesTableBody');
    ratesTableBody.innerHTML = ''; // Очищаем таблицу перед обновлением

    rates.forEach(rate => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${rate.currency}</td>
            <td>${rate.value}</td>
        `;
        ratesTableBody.appendChild(row);
    });
};
