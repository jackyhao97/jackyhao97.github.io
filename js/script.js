$('.page-scroll').on('click', function (e) {
  let tujuan = $(this).attr('href')
  let elemenTujuan = $(tujuan)
  $('html').animate(
    {
      scrollTop: elemenTujuan.offset().top - 50,
    },
    '2000',
    'easeInOutExpo'
  )
  e.preventDefault()

  // Control on show/hide menu viewport mobile
  $('#bs-example-navbar-collapse-1').removeClass('in')
  $('#button-menu').on('toggle', () =>
    $('#bs-example-navbar-collapse-1').toggleClass('in')
  )
})

// about
$(window).on('load', function () {
  $('.pKiri').addClass('pMuncul')
  $('.pKanan').addClass('pMuncul')
})
// akhir about

$(window).scroll(function () {
  let wScroll = $(this).scrollTop()

  // jumbotron
  $('.jumbotron img').css({
    transform: 'translate(0px, ' + wScroll / 4 + '%)',
  })

  $('.jumbotron h1').css({
    transform: 'translate(0px, ' + wScroll / 2 + '%)',
  })

  $('.jumbotron p').css({
    transform: 'translate(0px, ' + wScroll / 1.2 + '%)',
  })
  // akhir jumbotron

  // portfolio
  if (wScroll > $('.portfolio').offset().top - 250) {
    $('.portfolio .group').each(function (i) {
      setTimeout(function () {
        $('.portfolio .group').eq(i).addClass('muncul')
      }, 300 * i)
    })
  }
  // akhir portfolio
})

// Typing animation
const typed = new Typed('.typing', {
  strings: ['Software Developer'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
})

const darkmode = document.querySelector('.switch')
const rounded = darkmode.querySelector('.rounded')

darkmode.addEventListener('click', function () {
  rounded.classList.toggle('checked')
  darkmode.classList.toggle('active')
  document.body.classList.toggle('dark-theme')
  tech.classList.toggle('bg-gray')
  contact.classList.toggle('bg-gray')
})
