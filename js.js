fetch('/data/team/alice.json')
  .then(r => r.text())
  .then(a => {
    console.log('alice is', a)
  })
