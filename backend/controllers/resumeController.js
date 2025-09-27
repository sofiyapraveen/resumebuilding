// import Resume from '../models/resumeModel.js'
// import fs from 'fs'
// import path from 'path';

// //create
// export const createResume=async(req,res)=>{
//     try{
//         const { title } = req.body;

//         //default template
//         const defaultResumeData = {
//             profileInfo: {
//                 profileImg: null,
//                 previewUrl: '',
//                 fullName: '',
//                 designation: '',
//                 summary: '',
//             },
//             contactInfo: {
//                 email: '',
//                 phone: '',
//                 location: '',
//                 linkedin: '',
//                 github: '',
//                 website: '',
//             },
//             workExperience: [
//                 {
//                     company: '',
//                     role: '',
//                     startDate: '',
//                     endDate: '',
//                     description: '',
//                 },
//             ],
//             education: [
//                 {
//                     degree: '',
//                     institution: '',
//                     startDate: '',
//                     endDate: '',
//                 },
//             ],
//             skills: [
//                 {
//                     name: '',
//                     progress: 0,
//                 },
//             ],
//             projects: [
//                 {
//                     title: '',
//                     description: '',
//                     github: '',
//                     liveDemo: '',
//                 },
//             ],
//             certifications: [
//                 {
//                     title: '',
//                     issuer: '',
//                     year: '',
//                 },
//             ],
//             languages: [
//                 {
//                     name: '',
//                     progress: '',
//                 },
//             ],
//             interests: [''],
//         };
//         const newResume=await Resume.create({
//             userId:req.user._id,
//             title,
//             ...defaultResumeData,
//             ...req.body
//         })
//         res.status(201).json(newResume)

//     } 
//     catch(error){
//         res.status(500).json({message:"Failed to create resume", error:error.message})

//     }
// }

// //get function
// export const getUserResume=async(req,res)=>{
//     try{
//         const resumes=(await Resume.find({userId:req.user._id})).toSorted({
//             updateAt: -1
//         });
//         res.json(resumes)

//     }
//     catch(error){
//         res.status(500).json({message:"Failed to get resumes", error:error.message})


//     }
// }

// //get resume by id
// export const getResumeById=async(req,res)=>{
//     try{
//         const resume =await Resume.findOne({_id:req.params.id,userId:req.user._id})
//         if(!resume){
//             return res.status(404).json({message:"Resume not found"})
//         }
//         res.json(resume)
//     }
//     catch(error){

//     res.status(500).json({message:"Failed to get resumes", error:error.message})
//     }
// }

// //update reusme
// export const updateResume=async(req,res)=>{
//     try{
//        const resume=await Resume.findOne({
//         _id:req.params.id,
//         userId:req.user._id
//        }) 
//        if(!resume)
//        {
//         return res.status(404).json({message:"Resume not found or not authorized"})
//        }

//        //merge update resume
//        Object.assign(resume, req.body)
//        //save update resume
//        const savedResume=await resume.save();
//        res.json(savedResume)

//     }
//     catch(error){
//     res.status(500).json({message:"Failed to update resumes", error:error.message})

//     }
// }

// //delete resume
// export const deleteResume=async(req,res)=>{
//     try{
//         const resume=await Resume.findOne({
//         _id:req.params.id,
//         userId:req.user._id
//        }) 
//        if(!resume)
//        {
//         return res.status(404).json({message:"Resume not found or not authorized"})
//        }
//        //create upload folder
//        const uploadFolder=path.join(process.cwd(), 'upload')

//        //delete thumbnail
//        if(resume.thumbnailLink){
//         const oldThumbnail=path.join(uploadFolder, path.basename(resume.thumbnailLink))
//         if(fs.existsSync(oldThumbnail)){
//             fs.unlinkSync(oldThumbnail)
//         }

//        }
//        if(resume.profileInfo?.profilePreviewUrl){
//         const oldProfile=path.join(uploadFolder, path.basename(resume.profileInfo.profilePreviewUrl)
//     )
//     if(fs.existsSync(oldProfile)){
//             fs.unlinkSync(oldProfile)
//         }
//        }
//        //delete resume doc
//        const deleted=await Resume.findOneAndDelete({
//         _id:req.params.id,
//         userId:req.user._id

//        })
//        if(!deleted){
//       return res.status(404).json({message:"Resume not found or not authorized"})

//        }
//        res.json({message:"Resume deleted successfully"})

//     }
//     catch(error){
//      res.status(500).json({message:"Failed to delete resumes", error:error.message})

//     }
// }


// controllers/resumeController.js
// import fs from "fs";
// import path from "path";
// import Resume from "../models/resumeModel.js"; // adjust path if your model is elsewhere

// // If you need __dirname in ESM
// import { fileURLToPath } from "url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// /**
//  * GET all resumes for the logged-in user
//  */
// export const getUserResume = async (req, res) => {
//   try {
//     const resumes = await Resume.find({ userId: req.user._id });
//     res.json(resumes);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to fetch resumes", error: err.message });
//   }
// };

// /**
//  * UPDATE a specific resume
//  */
// export const updateResume = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updated = await Resume.findOneAndUpdate(
//       { _id: id, userId: req.user._id },
//       req.body,
//       { new: true }
//     );

//     if (!updated) {
//       return res.status(404).json({ message: "Resume not found or not authorized" });
//     }

//     res.json(updated);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to update resume", error: err.message });
//   }
// };

// /**
//  * DELETE a resume and any related files
//  */
// export const deleteResume = async (req, res) => {
//   try {
//     const resume = await Resume.findOne({
//       _id: req.params.id,
//       userId: req.user._id,
//     });

//     if (!resume) {
//       return res.status(404).json({ message: "Resume not found or not authorized" });
//     }

//     // upload folder path
//     const uploadFolder = path.join(process.cwd(), "upload");

//     // delete thumbnail if exists
//     if (resume.thumbnailLink) {
//       const oldThumbnail = path.join(uploadFolder, path.basename(resume.thumbnailLink));
//       if (fs.existsSync(oldThumbnail)) {
//         fs.unlinkSync(oldThumbnail);
//       }
//     }

//     // delete profile preview if exists
//     if (resume.profileInfo?.profilePreviewUrl) {
//       const oldProfile = path.join(
//         uploadFolder,
//         path.basename(resume.profileInfo.profilePreviewUrl)
//       );
//       if (fs.existsSync(oldProfile)) {
//         fs.unlinkSync(oldProfile);
//       }
//     }

//     // delete resume document
//     await Resume.findOneAndDelete({ _id: req.params.id, userId: req.user._id });

//     res.json({ message: "Resume deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Failed to delete resume", error: err.message });
//   }
// };


//----------------------2
// controllers/resumeController.js
// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";
// import Resume from "../models/resumeModel.js";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// /**
//  * GET all resumes of the logged-in user
//  */
// export const getUserResumes = async (req, res) => {
//   try {
//     const resumes = await Resume.find({ userId: req.user._id }).sort({ createdAt: -1 });
//     res.status(200).json(resumes);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to fetch resumes", error: err.message });
//   }
// };

// /**
//  * CREATE a new resume
//  */
// export const createResume = async (req, res) => {
//   try {
//     const newResume = new Resume({
//       ...req.body,
//       userId: req.user._id,
//     });
//     const saved = await newResume.save();
//     res.status(201).json(saved);
//   } catch (err) {
//     res.status(400).json({ message: "Failed to create resume", error: err.message });
//   }
// };

// /**
//  * UPDATE an existing resume
//  */
// export const updateResume = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updated = await Resume.findOneAndUpdate(
//       { _id: id, userId: req.user._id },
//       req.body,
//       { new: true }
//     );
//     if (!updated) {
//       return res.status(404).json({ message: "Resume not found or not authorized" });
//     }
//     res.status(200).json(updated);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to update resume", error: err.message });
//   }
// };

// /**
//  * DELETE a resume and its uploaded files
//  */
// export const deleteResume = async (req, res) => {
//   try {
//     const resume = await Resume.findOne({ _id: req.params.id, userId: req.user._id });
//     if (!resume) {
//       return res.status(404).json({ message: "Resume not found or not authorized" });
//     }

//     const uploadDir = path.join(process.cwd(), "upload");

//     // Remove thumbnail if exists
//     if (resume.thumbnailLink) {
//       const thumbPath = path.join(uploadDir, path.basename(resume.thumbnailLink));
//       if (fs.existsSync(thumbPath)) fs.unlinkSync(thumbPath);
//     }

//     // Remove profile preview if exists
//     if (resume.profileInfo?.profilePreviewUrl) {
//       const profilePath = path.join(uploadDir, path.basename(resume.profileInfo.profilePreviewUrl));
//       if (fs.existsSync(profilePath)) fs.unlinkSync(profilePath);
//     }

//     await Resume.deleteOne({ _id: req.params.id, userId: req.user._id });
//     res.status(200).json({ message: "Resume deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Failed to delete resume", error: err.message });
//   }
// };



//--------------------------3
// controllers/resumeController.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Resume from "../models/resumeModel.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * GET all resumes of the logged-in user
 */
export const getUserResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json(resumes);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch resumes", error: err.message });
  }
};

/**
 * CREATE a new resume
 */
export const createResume = async (req, res) => {
  try {
    const newResume = new Resume({
      ...req.body,
      userId: req.user._id,
    });
    const saved = await newResume.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: "Failed to create resume", error: err.message });
  }
};

/**
 * UPDATE an existing resume
 */
export const updateResume = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Resume.findOneAndUpdate(
      { _id: id, userId: req.user._id },
      req.body,
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: "Resume not found or not authorized" });
    }
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Failed to update resume", error: err.message });
  }
};

/**
 * DELETE a resume and its uploaded files
 */
export const deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({ _id: req.params.id, userId: req.user._id });
    if (!resume) {
      return res.status(404).json({ message: "Resume not found or not authorized" });
    }

    const uploadDir = path.join(process.cwd(), "upload");

    // Remove thumbnail if exists
    if (resume.thumbnailLink) {
      const thumbPath = path.join(uploadDir, path.basename(resume.thumbnailLink));
      if (fs.existsSync(thumbPath)) fs.unlinkSync(thumbPath);
    }

    // Remove profile preview if exists
    if (resume.profileInfo?.profilePreviewUrl) {
      const profilePath = path.join(uploadDir, path.basename(resume.profileInfo.profilePreviewUrl));
      if (fs.existsSync(profilePath)) fs.unlinkSync(profilePath);
    }

    await Resume.deleteOne({ _id: req.params.id, userId: req.user._id });
    res.status(200).json({ message: "Resume deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete resume", error: err.message });
  }
};

/**
 * GET a single resume by ID (must belong to the logged-in user)
 */
export const getResumeById = async (req, res) => {
  try {
    const { id } = req.params;
    const resume = await Resume.findOne({
      _id: id,
      userId: req.user._id,   // only the owner can access
    });

    if (!resume) {
      return res.status(404).json({ message: "Resume not found or not authorized" });
    }

    res.status(200).json(resume);
  } catch (err) {
    res.status(500).json({
      message: "Failed to fetch resume",
      error: err.message,
    });
  }
};
