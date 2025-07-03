document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("share-buttons").innerHTML = `
    <div class="position-fixed top-0 end-0 p-3 d-flex flex-column gap-4 align-items-end border bg-dark">
      <a class="facebook text-primary fs-3 fs-md-4 fs-lg-5 border-bottom" target="_blank"><i class="fab fa-facebook"></i></a>
      <a class="twitter text-info fs-3 fs-md-4 fs-lg-5 border-bottom " target="_blank"><i class="fab fa-x-twitter"></i></a>
      <a class="reddit text-danger fs-3 fs-md-4 fs-lg-5 border-bottom" target="_blank"><i class="fab fa-reddit"></i></a>
      <a class="whatsapp text-success fs-3 fs-md-4 fs-lg-5 " target="_blank"><i class="fab fa-whatsapp"></i></a>
    </div>
  `;

  const link = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.querySelector('title').textContent);
  const msg = encodeURIComponent(`Found this article: ${title}`);

  document.querySelector('.facebook').href = `https://www.facebook.com/share.php?u=${link}`;
  document.querySelector('.twitter').href = `https://twitter.com/share?url=${link}&text=${msg}&hashtags=cricket`;
  document.querySelector('.whatsapp').href = `https://api.whatsapp.com/send?text=${msg}%20${link}`;
  document.querySelector('.reddit').href = `https://www.reddit.com/submit?url=${link}&title=${title}`;
});
