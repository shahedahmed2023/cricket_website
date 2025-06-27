
document.addEventListener("DOMContentLoaded", () => {
            document.getElementById("share-buttons").innerHTML = `
            <a class="facebook" target="blank"><i class="fab fa-facebook"></i></a>
            <a class="twitter" target="blank"><i class="fa-brands fa-x-twitter"></i></a>
            <a class="reddit" target="blank"><i class="fab fa-reddit"></i></a>
            <a class="whatsapp" target="blank"><i class="fa-brands fa-whatsapp"></i></a>
            `
            const link =  encodeURI(window.location.href);
            const title = encodeURIComponent(document.querySelector('title').textContent);
            const msg = encodeURIComponent(`Found this article: ${title}`);
            console.log(link , msg , title)
            // Facebook
            const fb = document.querySelector('.facebook');
            fb.href = `https://www.facebook.com/share.php?u=${link}`;
            // Twitter
            const twitter = document.querySelector('.twitter');
            twitter.href = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=cricket`;
            // WhatsApp
            const whatsapp = document.querySelector('.whatsapp');
            whatsapp.href = `https://api.whatsapp.com/send?text=${msg}%20${link}`;

            // Reddit
            const reddit = document.querySelector('.reddit');
            reddit.href = `https://www.reddit.com/submit?url=${link}&title=${title}`;
});
     
     