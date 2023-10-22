<script>
  // Функция для добавления нового сообщения в чат
  function addMessage(nickname, message) {
    var chatContainer = document.getElementById("chat-container");
    var messageElement = document.createElement("p");
    messageElement.innerHTML = "<strong>" + nickname + ":</strong> " + message;
    chatContainer.appendChild(messageElement);
  }

  // Обработка отправки сообщения
  document.getElementById("message-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var nickname = decodeURIComponent(location.search.match(/(\?|&)nickname=([^&]+)/)[2]);
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value;
    messageInput.value = "";
    addMessage(nickname, message);
  });
</script>
