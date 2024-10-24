const themeToggle = () => {
  const refs = {
    body: document.querySelector(
      "body",
    ),
    button: document.querySelector(
      ".toggle-theme",
    ),
  };
  refs.button.addEventListener(
    "click",
    (e) => {
      console.log(refs.body);
      console.log(refs.body.classList);
      console.log(
        refs.body.classList.contains(
          "dark-theme",
        ),
      );
      if (
        refs.body.classList.contains(
          "dark-theme",
        )
      ) {
        refs.body.classList =
          "light-theme";
      } else {
        refs.body.classList =
          "dark-theme";
      }
    },
  );
};

themeToggle();
