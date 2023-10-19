let base_url = 'https://jsonplaceholder.typicode.com'

fetch(base_url + '/users')
  .then((res) => res.json())
  .then((res) => reload(res))

function reload(arr) {
  let box = document.querySelector('.box')
  for(let i of arr) {
    let info_box = document.createElement('div')
    let del = document.createElement('div')
    let e_mail = document.createElement('p')
    let e_mail_span = document.createElement('span')
    let item = document.createElement('div')
    let img = document.createElement('img')
    let info = document.createElement('div')
    let name = document.createElement('p')
    let name_span = document.createElement('span')
    let surname = document.createElement('p')
    let surname_span = document.createElement('span')
    let phone = document.createElement('p')
    let phone_span = document.createElement('span')
    let website = document.createElement('p')
    let website_a = document.createElement('a')

    surname.append(surname_span)
    name.append(name_span)
    phone.append(phone_span)
    website.append(website_a)
    info.append(name, surname, phone, website)
    item.append(img, info)
    e_mail.append(e_mail_span)
    info_box.append(item, e_mail, del)
    box.append(info_box)

    info_box.classList.add('info_box')
    item.classList.add('item')
    del.classList.add('delete')
    info.classList.add('info')
    img.classList.add('img')
    website_a.classList.add('website_a')

    img.src = '../img/user_img.png'
    website.innerHTML = `Website: ${website_a.innerHTML = i.website}`
    phone.innerHTML = `Phone: ${phone_span.innerHTML = i.phone}`
    name.innerHTML = `Name: ${name_span.innerHTML = i.name}`
    surname.innerHTML = `Username: ${surname_span.innerHTML = i.username}`
    e_mail.innerHTML = `E-mail: ${e_mail_span.innerHTML = i.email}`

    del.onclick = () => {
      info_box.remove()
    }

    let btn_add = document.querySelector('.submit')
    let btn_cancel = document.querySelector('.cancel')
    
    let db_user = []
    let add_user = []

    btn_add.onclick = (e) => {
      e.preventDefault()



      function added () {

        let form = document.forms
        let inp = document.querySelectorAll('input')

        for(let item of inp) {
          add_user.push(item.value)
          db_user.name = add_user[0]
          db_user.username = add_user[1]
          db_user.phone = add_user[2]
          db_user.website = add_user[3]
          db_user.email = add_user[4]
          reload(db_user)
        }
      }
      added()
    }
  }
}