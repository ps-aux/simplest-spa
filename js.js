fetch('/data/team/eam.json')
  .then(r => r.text())
  .then(team => {
    console.log('team', team)
  })
