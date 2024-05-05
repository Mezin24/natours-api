import express from 'express';
import {
  getAllTours,
  addNewTour,
  getTour,
  updateTour,
  deleteTour,
} from '../controllers/tourControllers';

const tourRouter = express.Router();

tourRouter.route('/').get(getAllTours).post(addNewTour);
tourRouter.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

export { tourRouter };
