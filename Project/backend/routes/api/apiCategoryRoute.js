// =========== Require's ==============================
const express = require('express');                                                           // Siempre requerimos express aunque ya se haya requerido en el entry point.
const router = express.Router();                                                              // Este objeto nos permite crear rutas.
const path = require("path");                                                                 // Para manejar rutas. Eimina la dependencia del sistema operativo.

// =========== Controladores ==========================
const apiCategoryController = require('../../controllers/api/apiCategoryController.js');      // ACA requerimos el controlador que tiene los callbacks que generarán las respuestas.

// =========== Router =================================

/**
* @swagger
* tags:
*   name: Categories
*   description: The Categories managing API
*/


/**
 * @swagger
 * /api/categories:
 *  get:
 *      summary: All categories
 *      tags: [Categories]
 *      description: Endpoint to request all categories
 *      responses: 
 *          '200':
 *              description: A successfull response
 */
/*** Todas las categorias ********/
router.get('/', apiCategoryController.index);                                                 // ACA se pone la ruta que sacamos de app.js. Este será el encargado de enviar la petición al controlador correspondiente para que genere la respuesta. Debemos usar el objeto router + método HTTP + callback (quien genera la respuesta). Usamos también SUBRUTAS del la funcionalidad.

/**
 * @swagger
 * /api/categories/{id}:
 *  get:
 *      summary: Details for a category
 *      tags: [Categories]
 *      description: Endpoint for gather information about a given category
 *      parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: id of the category
 *      responses: 
 *          '200':
 *              description: A successfull response
 */
/*** Detalle de una categoria ****/
router.get('/:id', apiCategoryController.detail);

// =========== Exporto Router =========================
module.exports = router;                                                                      // Siempre exportarlo porque lo necesitaremos usar en el ENTRY POINT para que sepa a qué archivo enviar sus rutas.