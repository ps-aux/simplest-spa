fetch('/data/team/alice.json')
  .then(r => r.json())
  .then(p => {

    const cont = document.createElement('div')

    const id = document.createElement('span')
    id.innerText = 'id: ' + p.id
    cont.append(id)

    cont.append(document.createElement('div'))

    const name = document.createElement('span')
    name.innerText = 'name: ' + p.name
    cont.append(name)

    document.body.append(cont)
  })
