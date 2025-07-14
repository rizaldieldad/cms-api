class ValidationError extends Error {
  constructor (message, field) {
    super(message)
    this.name = 'ValidationError'
    this.field = field
    this.statusCode = 400
  }
}

class UnauthorizedError extends Error {
  constructor (message = 'You are unauthorized!') {
    super(message)
    this.name = 'UnauthorizedError'
    this.statusCode = 401
  }
}

class ForbiddenError extends Error {
  constructor (message = 'Forbidden') {
    super(message)
    this.name = 'ForbiddenError'
    this.statusCode = 403
  }
}

class NotFoundError extends Error {
  constructor (message = 'Resource not found!') {
    super(message)
    this.name = 'NotFoundError'
    this.statusCode = 404
  }
}

class DatabaseError extends Error {
  constructor (message = 'Database operation failed!') {
    super(message)
    this.name = 'DatabaseError'
    this.statusCode = 500
  }
}

module.exports = {
  ValidationError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  DatabaseError
}
