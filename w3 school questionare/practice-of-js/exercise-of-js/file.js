function card_maker(title, channle, views, duration, months_ago, tumbhnil) {
  if (views > 1000&&views<1000000) {
    views=views/1000+"k";
  } else if (views > 1000000) {
    views=views/1000000+"M"
  } else if (views < 1000) {
  views=views;
  }

  let html = `<div class="card">
      <div class="image">
        <img
          src="${tumbhnil}"
        />
        <div>
            <p>${duration}</p>
        </div>
      </div>
      <div class="text">
        <h1>${title} </h1>
        <p>. ${channle} . ${views} views . ${months_ago} ago </p>
      </div>
    </div>`;
    document.querySelector(".cont").insertAdjacentHTML("beforeend", html);
}
card_maker(
  "Sigma web development | video #03 ",
  "code with harry",
  77000000,
  "31:06",
  "3 months ago",
  "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDPqs5LtUVsb50otOywVTZEmI75fg"
);
card_maker(
  "Sigma web development | video #04 ",
  "code with harry",
  770000,
  "34:06",
  "1 months ago",
  "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDPqs5LtUVsb50otOywVTZEmI75fg"
);
