document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // чтобы страница не перезагружалась

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  // 🔧 ВСТАВЬ свои данные сюда:
  const TOKEN = "7153789530:AAF-j5GUTXXmW3QYm3m-ZfyGA4RTulyZG3A";
  const CHAT_ID = "371591520";
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  // Формируем текст сообщения
  const text = `
📩 Новая заявка с сайта BAXTI BUILDINGS:
👤 Имя: ${name}
📞 Телефон: ${phone}
💬 Сообщение: ${message}
`;

  // Отправляем в Telegram
  fetch(URL_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: text,
    }),
  })
    .then((res) => {
      if (res.ok) {
        alert("✅ Сообщение успешно отправлено!");
        document.querySelector("form").reset();
      } else {
        alert("⚠️ Ошибка при отправке. Попробуйте позже.");
      }
    })
    .catch(() => alert("❌ Ошибка соединения с Telegram API."));
});

