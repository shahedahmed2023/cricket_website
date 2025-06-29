document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("share-buttons").innerHTML = `
    <div class="position-fixed top-0 end-0 p-3 d-flex flex-column gap-4 align-items-end">
      <a class="facebook text-primary fs-2 fs-md-3 fs-lg-4" target="_blank"><i class="fab fa-facebook"></i></a>
      <a class="twitter text-info fs-2 fs-md-3 fs-lg-4" target="_blank"><i class="fab fa-x-twitter"></i></a>
      <a class="reddit text-danger fs-2 fs-md-3 fs-lg-4" target="_blank"><i class="fab fa-reddit"></i></a>
      <a class="whatsapp text-success fs-2 fs-md-3 fs-lg-4" target="_blank"><i class="fab fa-whatsapp"></i></a>
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
