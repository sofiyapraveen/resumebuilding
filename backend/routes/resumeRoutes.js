// import express from 'express'
// import { protect } from '../middleware/authMiddleware.js';
// import { deleteResume, getUserResume, updateResume } from '../controllers/resumeController.js';
// import { uploadResumeImages } from '../controllers/uploadImages.js';

// const resumeRouter=express.Router();
// resumeRouter.post('/',protect, createResume)
// resumeRouter.get('/', protect, getUserResume)
// resumeRouter.get('/',protect,getUserResume)

// resumeRouter.put('/:id',protect,updateResume)
// resumeRouter.put('/:id/upload-images',protect,uploadResumeImages)

// resumeRouter.delete('/:id',protect,deleteResume)
// export default resumeRouter

import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
  createResume,
  getUserResumes,
  updateResume,
  deleteResume,
  getResumeById
  
} from '../controllers/resumeController.js';
import { uploadResumeImages } from '../controllers/uploadImages.js';

const resumeRouter = express.Router();

// Create a new resume
resumeRouter.post('/', protect, createResume);

// Get all resumes of the logged-in user
resumeRouter.get('/', protect, getUserResumes);

// ✅ Get a single resume by ID
 resumeRouter.get('/:id', protect, getResumeById);

// Update a resume
resumeRouter.put('/:id', protect, updateResume);

// Upload images for a resume
resumeRouter.put('/:id/upload-images', protect, uploadResumeImages);

// Delete a resume
resumeRouter.delete('/:id', protect, deleteResume);

export default resumeRouter;
