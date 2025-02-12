let noCount = 0;
const welcomeMessage = document.getElementById('welcome-message');
const questionDiv = document.getElementById('question');
const responseDiv = document.getElementById('response');
const responseText = document.getElementById('response-text');
const responseImage = document.getElementById('response-image');

// เมื่อเปิดเว็บมาให้แสดงข้อความต้อนรับ
welcomeMessage.style.display = 'block';
questionDiv.style.display = 'none';
responseDiv.style.display = 'none';

// เมื่อกด Next จากหน้าแรก
document.getElementById('next-button').addEventListener('click', function() {
    welcomeMessage.style.display = 'none';
    questionDiv.style.display = 'block';
    responseDiv.style.display = 'none';
});

// เมื่อกด Yes
document.getElementById('yes-button').addEventListener('click', function() {
    questionDiv.style.display = 'none';
    responseText.textContent = "ขอบคุณเธอมากนะคะฟิล์มดีใจที่ได้เธอมาเป็น Valentine ของฟิล์มนะคะ🥺";
    responseImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEWzGmGixWLKdqlnNPzaYzTVNKZcFp6E_T0Q&s";
    responseImage.style.display = 'block';
    responseDiv.style.display = 'block';
});

// เมื่อกด No
document.getElementById('no-button').addEventListener('click', function() {
    noCount++;
    if (noCount === 1) {
        responseText.textContent = "ไม่จริง ๆ หรอคะ 🥺";
    } else if (noCount === 2) {
        responseText.textContent = "ไม่เป็นจริง ๆ หรอคะมะเหมี่ยว 🥺";
    } else if (noCount === 3) {
        responseText.textContent = "แงงงฟิล์มจะร้องไห้แล้วนะฮื่ออ";
        responseImage.src = "https://cdn-useast1.kapwing.com/static/templates/crying-cat-meme-template-regular-096fc808.webp";
        responseImage.style.display = 'block';
    } else if (noCount === 4) {
        responseText.textContent = "นี่จะเป็นคำถามครั้งสุดท้ายนะคะ😭เธอจะไม่เป็น my valentine ของฟิล์มจริง ๆ หรอคะ";
    } else if (noCount === 5) {
        responseText.textContent = "โอเคค่ะฟิล์มเข้าใจแล้ว ฝากแค๊ปส่งให้ฟิล์มในแช็ตได้ไหมคะTT";
        questionDiv.style.display = 'none'; // ซ่อนคำถามหลังจากกด No ครั้งที่ 5
    }
    responseDiv.style.display = 'block'; // แสดงการตอบสนอง
});