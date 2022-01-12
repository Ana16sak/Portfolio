const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    const circle = entry.target.querySelector('.circle');
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      setTimeout(function(){
        entry.target.classList.add('circle-grow');
      },20);
      return;
    }
  });
});
observer.observe(document.querySelector('.scale_scroll'));

const observer_3 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    const circle = entry.target.querySelector('.scale_scroll circle-grow');
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      setTimeout(function(){
        entry.target.classList.add('Wrapper2');
      },20);
      return;
    }
  });
});
observer_3.observe(document.querySelector('.animation_scroll'));

const observer_new = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    const circle = entry.target.querySelector('.circle2');
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      setTimeout(function(){
        entry.target.classList.add('circle-grow');
      },20);
      return;
    }
  });
});
observer_new.observe(document.querySelector('.scale_scroll2'));

const observer_4 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    const circle = entry.target.querySelector('.scale_scroll circle-grow');
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      setTimeout(function(){
        entry.target.classList.add('Wrapper');
      },20);
      return;
    }
  });
});
observer_4.observe(document.querySelector('.animation_scroll2'));

const observer_5 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    const circle = entry.target.querySelector('.scale_scroll2 circle-grow');
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      setTimeout(function(){
        entry.target.classList.add('WrapperL');
      },20);
      return;
    }
  });
});
observer_5.observe(document.querySelector('.scroll'));
const observer_6 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    const circle = entry.target.querySelector('.scale_scroll2 circle-grow');
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      setTimeout(function(){
        entry.target.classList.add('Wrapper2L');
      },20);
      return;
    }
  });
});
observer_6.observe(document.querySelector('.scroll2'));



