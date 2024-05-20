import { books, authors, genres, BOOKS_PER_PAGE } from './data.js';
import { htmlElements } from './elements.js';

/**
 * Creates a book element.
 * @param {Object} book - The book data.
 * @param {string} book.author - The author of the book.
 * @param {string} book.id - The book ID.
 * @param {string} book.image - The URL of the book image.
 * @param {string} book.title - The title of the book.
 * @returns {HTMLElement} The book element.
 */