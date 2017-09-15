const DbContacts = require('../../db/contacts')
const {renderError} = require('../utils')

const router = require('express').Router()

router.get('/new', (request, response) => {
  response.render('new')
})

router.post('/new', (request, response, next) => {
  DbContacts.createContact(request.body)
    .then(contact => {
      if (contact) return response.redirect(`/contacts/${contact.id}`)
      next()
    })
    .catch( error => renderError(error, response, response) )
})

router.get('/:contactId', (request, response, next) => {
  const contactId = request.params.contactId
  if (!contactId || !/^\d+$/.test(contactId)) return next()
  DbContacts.getContact(contactId)
    .then(contact => {
      if (contact) return response.render('show', { contact })
      next()
    })
    .catch( error => renderError(error, response, response) )
})

router.get('/:contactId/delete', (request, response, next) => {
  const contactId = request.params.contactId
  DbContacts.deleteContact(contactId)
    .then( () => response.redirect('/'))
    .catch( error => renderError(error, response, response) )
})

router.get('/search', (request, response, next) => {
  const query = request.query.query
  DbContacts.searchForContact(query)
    .then(contacts => {
      if (contacts) return response.render('index', { query, contacts })
      next()
    })
    .catch( error => renderError(error, response, response) )
})

module.exports = router
