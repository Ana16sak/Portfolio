const observer10 = new IntersectionObserver(entries => {
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
  observer10.observe(document.querySelector('.scale_scroll_web'));
  
  const observer11 = new IntersectionObserver(entries => {
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
  observer11.observe(document.querySelector('.animation_scroll_web'));
  
  const observer12 = new IntersectionObserver(entries => {
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
  observer12.observe(document.querySelector('.scale_scroll2_web'));
  
  const observer13 = new IntersectionObserver(entries => {
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
  observer13.observe(document.querySelector('.animation_scroll2_web'));
  
  const observer14 = new IntersectionObserver(entries => {
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
  observer14.observe(document.querySelector('.scroll_web'));
  const observer15 = new IntersectionObserver(entries => {
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
  observer15.observe(document.querySelector('.scroll2_web'));
  
  
  
  