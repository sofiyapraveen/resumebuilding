
// //----------------------------------------
// import React, { useEffect, useRef, useState, useCallback } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import DashboardLayout from './DashboardLayout';
// import axiosInstance from '../utils/axiosInstance';
// import { API_PATHS } from '../utils/apiPaths';
// import toast from 'react-hot-toast';
// import { buttonStyles, containerStyles, statusStyles } from '../assets/dummystyle';
// import { TitleInput } from './Inputs';
// import { AlertCircle, ArrowLeft, Download, Palette, Trash2 } from 'lucide-react';
// import StepProgress from './StepProgress';

// // Resize observer hook
// const useResizeObserver = () => {
//   const [size, setSize] = useState({ width: 0, height: 0 });
//   const ref = useCallback((node) => {
//     if (node) {
//       const resizeObserver = new ResizeObserver((entries) => {
//         const { width, height } = entries[0].contentRect;
//         setSize({ width, height });
//       });
//       resizeObserver.observe(node);
//     }
//   }, []);

//   return { ...size, ref };
// };

// const EditResume = () => {
//   const { resumeId } = useParams();
//   const navigate = useNavigate();
//   const resumeDownloadRef = useRef(null);

//   const [resumeData, setResumeData] = useState({
//     title: 'Professional Resume',
//     profileInfo: { fullName: '', designation: '', summary: '' },
//     contactInfo: { email: '', phone: '', location: '', linkedin: '', github: '', website: '' },
//     workExperience: [{ company: '', role: '', startDate: '', endDate: '', description: '' }],
//     education: [{ degree: '', institution: '', startDate: '', endDate: '' }],
//     skills: [{ name: '', progress: 0 }],
//     projects: [{ title: '', description: '', github: '', liveDemo: '' }],
//     certifications: [{ title: '', issuer: '', year: '' }],
//     languages: [{ name: '', progress: 0 }],
//     interests: [''],
//     template: { theme: 'modern', colorPalette: [] },
//   });

//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState('');


//   // Fetch resume by ID
//   const fetchResumeDetailsById = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         toast.error('No token found. Please login again.');
//         navigate('/');
//         return;
//       }

//       const response = await axiosInstance.get(API_PATHS.RESUME.GET_BY_ID(resumeId), {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       if (response.data) {
//         setResumeData(response.data);
//       }
//     } catch (error) {
//       console.error('Error fetching resume:', error);
//       toast.error('Failed to load resume data');
//     }
//   };

//   // Update resume details
//   const updateResumeDetails = async () => {
//     try {
//       setIsLoading(true);
//       const token = localStorage.getItem('token');
//       if (!token) {
//         toast.error('No token found. Please login again.');
//         navigate('/');
//         return;
//       }

//       await axiosInstance.put(
//         API_PATHS.RESUME.UPDATE(resumeId),
//         resumeData,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       toast.success('Resume updated successfully!');
//     } catch (err) {
//       console.error('Error updating resume:', err);
//       toast.error('Failed to update resume');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Delete resume
//   const handleDeleteResume = async () => {
//     try {
//       setIsLoading(true);
//       const token = localStorage.getItem('token');
//       if (!token) {
//         toast.error('No token found. Please login again.');
//         navigate('/');
//         return;
//       }

//       await axiosInstance.delete(API_PATHS.RESUME.DELETE(resumeId), {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       toast.success('Resume deleted successfully!');
//       navigate('/dashboard');
//     } catch (error) {
//       console.error('Error deleting resume:', error);
//       toast.error('Failed to delete resume');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (resumeId) {
//       fetchResumeDetailsById();
//     }
//   }, [resumeId]);

//   return (
//     <DashboardLayout>
//       <div className={containerStyles.main}>
//         <div className={containerStyles.header}>
//           <TitleInput
//             title={resumeData.title}
//             setTitle={(value) => setResumeData((prev) => ({ ...prev, title: value }))}
//           />
//           <div className='flex flex-wrap items-center gap-3'>
//             <button onClick={() => toast('Theme selector not implemented')} className={buttonStyles.theme}>
//               <Palette size={16} />
//               <span className='text-sm'>Theme</span>
//             </button>
//             <button onClick={handleDeleteResume} className={buttonStyles.delete} disabled={isLoading}>
//               <Trash2 size={16} />
//               <span className='text-sm'>Delete</span>
//             </button>
//             <button onClick={() => toast('Preview not implemented')} className={buttonStyles.download}>
//               <Download size={16} />
//               <span className='text-sm'>Preview</span>
//             </button>
//           </div>
//         </div>

//         {/* step progress */}
//         <div className={containerStyles.grid}>
//             <div className={containerStyles.formContainer}>
//                 <StepProgress progress={progress}/>
//                 {renderForm()}
//                 <div className='p-4 sm:p-6'>
//                     {errorMsg && (
//                         <div className={statusStyles.error}>
//                             <AlertCircle size={16} />
//                             {errorMsg}
//                         </div>
//                     )}

//                     <div className='flex flex-wrap items-center justify-end gap-3'>
//                         <button className={buttonStyles.back} onClick={goBack} disabled={isLoading}>
//                             <ArrowLeft size={16} />
//                             Back
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default EditResume;


//----------------------------------------
// import React, { useEffect, useRef, useState, useCallback } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import DashboardLayout from './DashboardLayout';
// import axiosInstance from '../utils/axiosInstance';
// import { API_PATHS } from '../utils/apiPaths';
// import toast from 'react-hot-toast';
// import {
//   buttonStyles,
//   containerStyles,
//   statusStyles,
// } from '../assets/dummystyle';
// import { TitleInput } from './Inputs';
// import {
//   AlertCircle,
//   ArrowLeft,
//   Download,
//   Palette,
//   Trash2,
// } from 'lucide-react';
// import StepProgress from './StepProgress';

// // Resize observer hook
// const useResizeObserver = () => {
//   const [size, setSize] = useState({ width: 0, height: 0 });
//   const ref = useCallback((node) => {
//     if (node) {
//       const resizeObserver = new ResizeObserver((entries) => {
//         const { width, height } = entries[0].contentRect;
//         setSize({ width, height });
//       });
//       resizeObserver.observe(node);
//     }
//   }, []);
//   return { ...size, ref };
// };

// const EditResume = () => {
//   const { resumeId } = useParams();
//   const navigate = useNavigate();
//   const resumeDownloadRef = useRef(null);

//   // ----------------- STATE -----------------
//   const [resumeData, setResumeData] = useState({
//     title: 'Professional Resume',
//     profileInfo: { fullName: '', designation: '', summary: '' },
//     contactInfo: {
//       email: '',
//       phone: '',
//       location: '',
//       linkedin: '',
//       github: '',
//       website: '',
//     },
//     workExperience: [
//       { company: '', role: '', startDate: '', endDate: '', description: '' },
//     ],
//     education: [{ degree: '', institution: '', startDate: '', endDate: '' }],
//     skills: [{ name: '', progress: 0 }],
//     projects: [{ title: '', description: '', github: '', liveDemo: '' }],
//     certifications: [{ title: '', issuer: '', year: '' }],
//     languages: [{ name: '', progress: 0 }],
//     interests: [''],
//     template: { theme: 'modern', colorPalette: [] },
//   });

//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState('');

//   // ✅ added step control so StepProgress works
//   const [progress, setProgress] = useState(0);
//   const [step, setStep] = useState(0);

//   // ----------------- HELPERS -----------------
//   const renderForm = () => {
//     // Simple placeholder until you build actual multi-step forms
//     return (
//       <div className="p-4 text-gray-700">
//         Step {step + 1}: (your step content here)
//         <div className="mt-4 flex gap-2">
//           {step > 0 && (
//             <button
//               className={buttonStyles.back}
//               onClick={() => goBack()}
//               disabled={isLoading}
//             >
//               Previous
//             </button>
//           )}
//           {step < 2 && (
//             <button
//               className={buttonStyles.theme}
//               onClick={() => nextStep()}
//               disabled={isLoading}
//             >
//               Next
//             </button>
//           )}
//         </div>
//       </div>
//     );
//   };

//   const nextStep = () => {
//     const newStep = step + 1;
//     setStep(newStep);
//     setProgress(((newStep + 1) / 3) * 100); // assume 3 steps for demo
//   };

//   const goBack = () => {
//     const newStep = Math.max(step - 1, 0);
//     setStep(newStep);
//     setProgress(((newStep + 1) / 3) * 100);
//   };

//   // ----------------- API CALLS -----------------
//   const fetchResumeDetailsById = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         toast.error('No token found. Please login again.');
//         navigate('/');
//         return;
//       }

//       const response = await axiosInstance.get(
//         API_PATHS.RESUME.GET_BY_ID(resumeId),
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       if (response.data) setResumeData(response.data);
//     } catch (error) {
//       console.error('Error fetching resume:', error);
//       toast.error('Failed to load resume data');
//     }
//   };

//   const updateResumeDetails = async () => {
//     try {
//       setIsLoading(true);
//       const token = localStorage.getItem('token');
//       if (!token) {
//         toast.error('No token found. Please login again.');
//         navigate('/');
//         return;
//       }

//       await axiosInstance.put(API_PATHS.RESUME.UPDATE(resumeId), resumeData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       toast.success('Resume updated successfully!');
//     } catch (err) {
//       console.error('Error updating resume:', err);
//       toast.error('Failed to update resume');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDeleteResume = async () => {
//     try {
//       setIsLoading(true);
//       const token = localStorage.getItem('token');
//       if (!token) {
//         toast.error('No token found. Please login again.');
//         navigate('/');
//         return;
//       }

//       await axiosInstance.delete(API_PATHS.RESUME.DELETE(resumeId), {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       toast.success('Resume deleted successfully!');
//       navigate('/dashboard');
//     } catch (error) {
//       console.error('Error deleting resume:', error);
//       toast.error('Failed to delete resume');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // ----------------- EFFECT -----------------
//   useEffect(() => {
//     if (resumeId) fetchResumeDetailsById();
//   }, [resumeId]);

//   // ----------------- RENDER -----------------
//   return (
//     <DashboardLayout>
//       <div className={containerStyles.main}>
//         <div className={containerStyles.header}>
//           <TitleInput
//             title={resumeData.title}
//             setTitle={(value) =>
//               setResumeData((prev) => ({ ...prev, title: value }))
//             }
//           />
//           <div className="flex flex-wrap items-center gap-3">
//             <button
//               onClick={() => toast('Theme selector not implemented')}
//               className={buttonStyles.theme}
//             >
//               <Palette size={16} />
//               <span className="text-sm">Theme</span>
//             </button>
//             <button
//               onClick={handleDeleteResume}
//               className={buttonStyles.delete}
//               disabled={isLoading}
//             >
//               <Trash2 size={16} />
//               <span className="text-sm">Delete</span>
//             </button>
//             <button
//               onClick={() => toast('Preview not implemented')}
//               className={buttonStyles.download}
//             >
//               <Download size={16} />
//               <span className="text-sm">Preview</span>
//             </button>
//           </div>
//         </div>

//         {/* step progress */}
//         <div className={containerStyles.grid}>
//           <div className={containerStyles.formContainer}>
//             <StepProgress progress={progress} />
//             {renderForm()}
//             <div className="p-4 sm:p-6">
//               {errorMsg && (
//                 <div className={statusStyles.error}>
//                   <AlertCircle size={16} />
//                   {errorMsg}
//                 </div>
//               )}

//               <div className="flex flex-wrap items-center justify-end gap-3">
//                 <button
//                   className={buttonStyles.back}
//                   onClick={goBack}
//                   disabled={isLoading || step === 0}
//                 >
//                   <ArrowLeft size={16} />
//                   Back
//                 </button>
//                 <button
//                   className={buttonStyles.theme}
//                   onClick={updateResumeDetails}
//                   disabled={isLoading}
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default EditResume;


//--------------------------------------------------

// import React, { useEffect, useRef, useState, useCallback } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import DashboardLayout from './DashboardLayout';
// import axiosInstance from '../utils/axiosInstance';
// import { API_PATHS } from '../utils/apiPaths';
// import toast from 'react-hot-toast';
// import {
//   buttonStyles,
//   containerStyles,
//   iconStyles,
//   statusStyles,
// } from '../assets/dummystyle';
// import { TitleInput } from './Inputs';
// import {
//   AlertCircle,
//   ArrowLeft,
//   Check,
//   Download,
//   Loader2,
//   Palette,
//   Save,
//   Trash2,
// } from 'lucide-react';
// import StepProgress from './StepProgress';
// import { uploadResumeImages } from '../../../backend/controllers/uploadImages';
// import RenderResume from './RenderResume';
// import { preview } from 'vite';
// import Modal from './Modal';
// import ThemeSelector from './ThemeSelector';

// // ----------------- RESIZE OBSERVER -----------------
// const useResizeObserver = () => {
//   const [size, setSize] = useState({ width: 0, height: 0 });
//   const ref = useCallback((node) => {
//     if (node) {
//       const resizeObserver = new ResizeObserver((entries) => {
//         const { width, height } = entries[0].contentRect;
//         setSize({ width, height });
//       });
//       resizeObserver.observe(node);
//     }
//   }, []);
//   return { ...size, ref };
// };

// // ----------------- DEFAULT RESUME SHAPE -----------------
// const defaultResume = {
//   title: 'Professional Resume',
//   profileInfo: { fullName: '', designation: '', summary: '' },
//   contactInfo: {
//     email: '',
//     phone: '',
//     location: '',
//     linkedin: '',
//     github: '',
//     website: '',
//   },
//   workExperience: [
//     { company: '', role: '', startDate: '', endDate: '', description: '' },
//   ],
//   education: [{ degree: '', institution: '', startDate: '', endDate: '' }],
//   skills: [{ name: '', progress: 0 }],
//   projects: [{ title: '', description: '', github: '', liveDemo: '' }],
//   certifications: [{ title: '', issuer: '', year: '' }],
//   languages: [{ name: '', progress: 0 }],
//   interests: [''],
//   template: { theme: 'modern', colorPalette: [] },
// };

// const EditResume = () => {
//   const { resumeId } = useParams();
//   const navigate = useNavigate();
//   const resumeDownloadRef = useRef(null);

//   const [resumeData, setResumeData] = useState(defaultResume);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState('');

//   // stepper
//   const [progress, setProgress] = useState(33);
//   const [step, setStep] = useState(0);

//   // ----------------- STEP ONE -----------------
//   const StepOnePersonalInfo = () => (
//     <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
//       <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

//       <div>
//         <label className="block text-sm font-medium mb-1">Full Name</label>
//         <input
//           type="text"
//           placeholder="Enter your full name"
//           className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={resumeData?.profileInfo?.fullName || ''}
//           onChange={(e) =>
//             setResumeData((prev) => ({
//               ...prev,
//               profileInfo: { ...prev.profileInfo, fullName: e.target.value },
//             }))
//           }
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium mb-1">Designation</label>
//         <input
//           type="text"
//           placeholder="e.g. Software Engineer"
//           className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={resumeData?.profileInfo?.designation || ''}
//           onChange={(e) =>
//             setResumeData((prev) => ({
//               ...prev,
//               profileInfo: { ...prev.profileInfo, designation: e.target.value },
//             }))
//           }
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium mb-1">Summary</label>
//         <textarea
//           placeholder="Write a short professional summary"
//           className="w-full rounded-md border border-gray-300 p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={resumeData?.profileInfo?.summary || ''}
//           onChange={(e) =>
//             setResumeData((prev) => ({
//               ...prev,
//               profileInfo: { ...prev.profileInfo, summary: e.target.value },
//             }))
//           }
//         />
//       </div>
//     </div>
//   );

//   const renderForm = () => {
//     switch (step) {
//       case 0:
//         return <StepOnePersonalInfo />;
//       case 1:
//         return <div className="p-4 text-gray-700">Step 2 placeholder</div>;
//       case 2:
//         return <div className="p-4 text-gray-700">Step 3 placeholder</div>;
//       default:
//         return null;
//     }
//   };

//   const nextStep = () => {
//     const newStep = Math.min(step + 1, 2);
//     setStep(newStep);
//     setProgress(((newStep + 1) / 3) * 100);
//   };

//   const goBack = () => {
//     const newStep = Math.max(step - 1, 0);
//     setStep(newStep);
//     setProgress(((newStep + 1) / 3) * 100);
//   };

//   // ----------------- API -----------------
//   const fetchResumeDetailsById = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         toast.error('No token found. Please login again.');
//         navigate('/');
//         return;
//       }

//       const response = await axiosInstance.get(
//         API_PATHS.RESUME.GET_BY_ID(resumeId),
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       if (response.data) {
//         // merge defaults with API data
//         setResumeData((prev) => ({
//           ...prev,
//           ...response.data,
//           profileInfo: {
//             ...prev.profileInfo,
//             ...(response.data.profileInfo || {}),
//           },
//           contactInfo: {
//             ...prev.contactInfo,
//             ...(response.data.contactInfo || {}),
//           },
//         }));
//       }
//     } catch (error) {
//       console.error('Error fetching resume:', error);
//       toast.error('Failed to load resume data');
//     }
//   };

//   const updateResumeDetails = async () => {
//     try {
//       setIsLoading(true);
//       const token = localStorage.getItem('token');
//       if (!token) {
//         toast.error('No token found. Please login again.');
//         navigate('/');
//         return;
//       }

//       await axiosInstance.put(API_PATHS.RESUME.UPDATE(resumeId), resumeData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       toast.success('Resume updated successfully!');
//     } catch (err) {
//       console.error('Error updating resume:', err);
//       toast.error('Failed to update resume');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDeleteResume = async () => {
//     try {
//       setIsLoading(true);
//       const token = localStorage.getItem('token');
//       if (!token) {
//         toast.error('No token found. Please login again.');
//         navigate('/');
//         return;
//       }

//       await axiosInstance.delete(API_PATHS.RESUME.DELETE(resumeId), {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       toast.success('Resume deleted successfully!');
//       navigate('/dashboard');
//     } catch (error) {
//       console.error('Error deleting resume:', error);
//       toast.error('Failed to delete resume');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (resumeId) fetchResumeDetailsById();
//   }, [resumeId]);

//   // ----------------- RENDER -----------------
//   return (
//     <DashboardLayout>
//       <div className={containerStyles.main}>
//         <div className={containerStyles.header}>
//           <TitleInput
//             title={resumeData.title}
//             setTitle={(value) =>
//               setResumeData((prev) => ({ ...prev, title: value }))
//             }
//           />

//           <div className="flex flex-wrap items-center gap-3">
//             <button
//               onClick={() => toast('Theme selector not implemented')}
//               className={buttonStyles.theme}
//             >
//               <Palette size={16} />
//               <span className="text-sm">Theme</span>
//             </button>

//             <button
//               onClick={handleDeleteResume}
//               className={buttonStyles.delete}
//               disabled={isLoading}
//             >
//               <Trash2 size={16} />
//               <span className="text-sm">Delete</span>
//             </button>

//             <button
//               onClick={() => toast('Preview not implemented')}
//               className={buttonStyles.download}
//             >
//               <Download size={16} />
//               <span className="text-sm">Preview</span>
//             </button>
//           </div>
//         </div>

//         <div className={containerStyles.grid}>
//           <div className={containerStyles.formContainer}>
//             <StepProgress progress={progress} />
//             {renderForm()}

//             <div className="p-4 sm:p-6">
//               {errorMsg && (
//                 <div className={statusStyles.error}>
//                   <AlertCircle size={16} />
//                   {errorMsg}
//                 </div>
//               )}

//               <div className="flex flex-wrap items-center justify-end gap-3">
//                 <button
//                   className={buttonStyles.back}
//                   onClick={goBack}
//                   disabled={isLoading}
//                 >
//                   <ArrowLeft size={16} />
//                   Back
//                 </button>
                
//                 <button
//                   className={buttonStyles.save}
//                   onClick={uploadResumeImages}
//                   disabled={isLoading}>
//                   {isLoading ? <Loader2 size={16} className='animate-spin' />
//                 : <Save size={16} />}
//                 {isLoading ? "Saving..." : "Save & Exit"}

//                 </button>
//                 <button className={buttonStyles.next} onClick={validateAndNext} disabled={isLoading}>
//                     {currentPage === "additionalInfo" && <Download size={16} />}
//                     {currentPage === "additionalInfo" ? "Preview & Download" : "Next"}
//                     {currentPage === "additionalInfo" && <ArrowLeft size={16} className='rotate-180'/>}
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className='hidden lg:block'>
//             <div className={containerStyles.previewContainer}>
//                 <div className='text-center mb-4'>
//                     <div className={statusStyles.completionBadge}>
//                         <div className={iconStyles.pulseDot}></div>
//                         <span>Preview - {completionPercentage}% Complete</span>
//                     </div>
//                 </div>
//                 <div className='preview-container relative' ref={previewContainerRef}>
//                     <div className={containerStyles.previewInner}>
//                         <RenderResume key={`preview-${resumeData?.template?.theme}`}
//                         templateId={resumeData?.template?.theme || ""}
//                         resumeData={resumeData}
//                         containerWidth={previewWidth}/>
//                     </div>
//                 </div>

//             </div>
//           </div>
//         </div>
//       </div>

//       {/* modal data */}
//       <Modal isOpen={openThemeSelector} onClose={()=> setOpenThemeSelector(false)}
//         title="change Title">
//             <div className={containerStyles.modalContent}>
//                 <ThemeSelector selectedTheme={resumeData?.template.theme}
//                 setSelectTheme={updateTheme} onClose={()=> setOpenThemeSelector(false)}/>
//             </div>
//         </Modal>
//         <Modal isOpen={openPreviewModal} onClose={()=> setOpenPreviewModal(false)}
//             title={resumeData.title}
//             showActionBtn
//         actionBtnText={isDownloading ? "Generating..."
//             : downloadSuccess ? "Downloaded!" : "Download PDF"}
            
//             actionBtnIcon={isDownloading ? (
//                 <Loader2 size={16} className='animate-spin'/>
//             ) : downloadSuccess ? (
//                 <Check size={16} className='text-white'/>
//             ) : (
//                 <Download size={16}/>
//             )}
//             onActionClick={downloadPDF}
//             >

//                 <div className='relative'>
//                     <div className={statusStyles.modalBadge}>
//                         <div className={iconStyles.pulseDot}></div>
//                         <span >Completon: {completionPercentage}%</span>
//                     </div>
//                 </div>

//                 <div className={containerStyles.pdfPreview}>
//                     <div ref={resumeDownloadRef} className='a4-wrapper'>
//                         <div className='w-full h-full'>
//                             <RenderResume key={`pdf-${resumeData?.template?.theme}`}
//                             templateId={resumeData?.template?.theme || ""}
//                             resumeData={resumeData}
//                             containerWidth={null} />

//                         </div>
//                     </div>
//                 </div>

//             </Modal>
//             {/* thumbnail */}
//             <div style={{display:"none"}} ref={thumbnailRef}>
//                 <div className={containerStyles.hiddenThumbnail}>
//                     <RenderResume key={`thumb-${resumeData?.template?.theme}`}
//                     templateId={resumeData?.template?.theme || ""}
//                     resumeData={resumeData}/>
//                 </div>
//             </div>
//     </DashboardLayout>
//   );
// };

// export default EditResume;

//----------------------------3
// import React, { useEffect, useRef, useState, useCallback } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import DashboardLayout from './DashboardLayout';
// import axiosInstance from '../utils/axiosInstance';
// import { API_PATHS } from '../utils/apiPaths';
// import toast from 'react-hot-toast';
// import {
//   buttonStyles,
//   containerStyles,
//   statusStyles,
// } from '../assets/dummystyle';
// import { TitleInput } from './Inputs';
// import {
//   AlertCircle,
//   ArrowLeft,
//   Download,
//   Loader2,
//   Palette,
//   Save,
//   Trash2,
// } from 'lucide-react';
// import StepProgress from './StepProgress';
// import { uploadResumeImages } from '../../../backend/controllers/uploadImages';

// // ----------------- DEFAULT RESUME -----------------
// const defaultResume = {
//   title: 'Professional Resume',
//   profileInfo: { fullName: '', designation: '', summary: '' },
//   contactInfo: {
//     email: '',
//     phone: '',
//     location: '',
//     linkedin: '',
//     github: '',
//     website: '',
//   },
//   workExperience: [{ company: '', role: '', startDate: '', endDate: '', description: '' }],
//   education: [{ degree: '', institution: '', startDate: '', endDate: '' }],
//   skills: [{ name: '', progress: 0 }],
//   projects: [{ title: '', description: '', github: '', liveDemo: '' }],
//   certifications: [{ title: '', issuer: '', year: '' }],
//   languages: [{ name: '', progress: 0 }],
//   interests: [''],
//   template: { theme: 'modern', colorPalette: [] },
// };

// const EditResume = () => {
//   const { resumeId } = useParams();
//   const navigate = useNavigate();
//   const [resumeData, setResumeData] = useState(defaultResume);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState('');
//   const [selectedFile, setSelectedFile] = useState(null);

//   const [progress, setProgress] = useState(33);
//   const [step, setStep] = useState(0);

//   // ----------------- STEP ONE -----------------
//   const StepOnePersonalInfo = () => (
//     <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
//       <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

//       <div>
//         <label className="block text-sm font-medium mb-1">Full Name</label>
//         <input
//           type="text"
//           placeholder="Enter your full name"
//           className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={resumeData?.profileInfo?.fullName || ''}
//           onChange={(e) =>
//             setResumeData((prev) => ({
//               ...prev,
//               profileInfo: { ...prev.profileInfo, fullName: e.target.value },
//             }))
//           }
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium mb-1">Designation</label>
//         <input
//           type="text"
//           placeholder="e.g. Software Engineer"
//           className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={resumeData?.profileInfo?.designation || ''}
//           onChange={(e) =>
//             setResumeData((prev) => ({
//               ...prev,
//               profileInfo: { ...prev.profileInfo, designation: e.target.value },
//             }))
//           }
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium mb-1">Summary</label>
//         <textarea
//           placeholder="Write a short professional summary"
//           className="w-full rounded-md border border-gray-300 p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={resumeData?.profileInfo?.summary || ''}
//           onChange={(e) =>
//             setResumeData((prev) => ({
//               ...prev,
//               profileInfo: { ...prev.profileInfo, summary: e.target.value },
//             }))
//           }
//         />
//       </div>

//       {/* File input for uploading resume image */}
//       <div>
//         <label className="block text-sm font-medium mb-1">Upload Profile Image</label>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setSelectedFile(e.target.files[0])}
//         />
//       </div>
//     </div>
//   );

//   const renderForm = () => {
//     switch (step) {
//       case 0:
//         return <StepOnePersonalInfo />;
//       case 1:
//         return <div className="p-4 text-gray-700">Step 2 placeholder</div>;
//       case 2:
//         return <div className="p-4 text-gray-700">Step 3 placeholder</div>;
//       default:
//         return null;
//     }
//   };

//   const nextStep = () => {
//     const newStep = Math.min(step + 1, 2);
//     setStep(newStep);
//     setProgress(((newStep + 1) / 3) * 100);
//   };

//   const goBack = () => {
//     const newStep = Math.max(step - 1, 0);
//     setStep(newStep);
//     setProgress(((newStep + 1) / 3) * 100);
//   };

//   // ----------------- API -----------------
//   const fetchResumeDetailsById = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         toast.error('No token found. Please login again.');
//         navigate('/');
//         return;
//       }

//       const response = await axiosInstance.get(API_PATHS.RESUME.GET_BY_ID(resumeId), {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       if (response.data) {
//         setResumeData((prev) => ({
//           ...prev,
//           ...response.data,
//           profileInfo: { ...prev.profileInfo, ...(response.data.profileInfo || {}) },
//           contactInfo: { ...prev.contactInfo, ...(response.data.contactInfo || {}) },
//         }));
//       }
//     } catch (error) {
//       console.error('Error fetching resume:', error);
//       toast.error('Failed to load resume data');
//     }
//   };

//   const updateResumeDetails = async () => {
//     try {
//       setIsLoading(true);
//       const token = localStorage.getItem('token');
//       if (!token) {
//         toast.error('No token found. Please login again.');
//         navigate('/');
//         return;
//       }

//       await axiosInstance.put(API_PATHS.RESUME.UPDATE(resumeId), resumeData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       toast.success('Resume updated successfully!');
//     } catch (err) {
//       console.error('Error updating resume:', err);
//       toast.error('Failed to update resume');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleFileUpload = async () => {
//     if (!selectedFile) {
//       toast.error('Please select a file to upload.');
//       return;
//     }
//     try {
//       setIsLoading(true);
//       const token = localStorage.getItem('token');
//       const formData = new FormData();
//       formData.append('file', selectedFile);

//       await axiosInstance.post(`/api/resume/${resumeId}/upload`, formData, {
//         headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' },
//       });
//       toast.success('Profile image uploaded successfully!');
//     } catch (err) {
//       console.error('Upload error:', err);
//       toast.error('Failed to upload file.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDeleteResume = async () => {
//     try {
//       setIsLoading(true);
//       const token = localStorage.getItem('token');
//       if (!token) {
//         toast.error('No token found. Please login again.');
//         navigate('/');
//         return;
//       }

//       await axiosInstance.delete(API_PATHS.RESUME.DELETE(resumeId), {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       toast.success('Resume deleted successfully!');
//       navigate('/dashboard');
//     } catch (error) {
//       console.error('Error deleting resume:', error);
//       toast.error('Failed to delete resume');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (resumeId) fetchResumeDetailsById();
//   }, [resumeId]);

//   // ----------------- RENDER -----------------
//   return (
//     <DashboardLayout>
//       <div className={containerStyles.main}>
//         <div className={containerStyles.header}>
//           <TitleInput
//             title={resumeData.title}
//             setTitle={(value) => setResumeData((prev) => ({ ...prev, title: value }))}
//           />

//           <div className="flex flex-wrap items-center gap-3">
//             <button onClick={() => toast('Theme selector not implemented')} className={buttonStyles.theme}>
//               <Palette size={16} /> <span className="text-sm">Theme</span>
//             </button>

//             <button onClick={handleDeleteResume} className={buttonStyles.delete} disabled={isLoading}>
//               <Trash2 size={16} /> <span className="text-sm">Delete</span>
//             </button>

//             <button onClick={() => toast('Preview not implemented')} className={buttonStyles.download}>
//               <Download size={16} /> <span className="text-sm">Preview</span>
//             </button>
//           </div>
//         </div>

//         <div className={containerStyles.grid}>
//           <div className={containerStyles.formContainer}>
//             <StepProgress progress={progress} />
//             {renderForm()}

//             <div className="p-4 sm:p-6">
//               {errorMsg && (
//                 <div className={statusStyles.error}>
//                   <AlertCircle size={16} />
//                   {errorMsg}
//                 </div>
//               )}

//               <div className="flex flex-wrap items-center justify-end gap-3">
//                 <button className={buttonStyles.back} onClick={goBack} disabled={isLoading || step === 0}>
//                   <ArrowLeft size={16} /> Back
//                 </button>

//                 <button className={buttonStyles.save} onClick={uploadResumeImages} disabled={isLoading}>
//                   {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
//                   {isLoading ? "Uploading..." : "Save & Exit"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default EditResume;



// 4/----------------
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';
import toast from 'react-hot-toast';
import {
  buttonStyles,
  containerStyles,
  iconStyles,
  statusStyles,
} from '../assets/dummystyle';
import { TitleInput } from './Inputs';
import {
  AlertCircle,
  ArrowLeft,
  Check,
  Download,
  Loader2,
  Palette,
  Save,
  Trash2,
} from 'lucide-react';
import StepProgress from './StepProgress';
import RenderResume from './RenderResume';
import Modal from './Modal';
import ThemeSelector from './ThemeSelector';
 import jsPDF from 'jspdf';
import html2pdf from 'html2pdf.js';

// ----------------- RESIZE OBSERVER -----------------
const useResizeObserver = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const ref = useCallback((node) => {
    if (node) {
      const resizeObserver = new ResizeObserver((entries) => {
        const { width, height } = entries[0].contentRect;
        setSize({ width, height });
      });
      resizeObserver.observe(node);
    }
  }, []);
  return { ...size, ref };
};

// ----------------- DEFAULT RESUME SHAPE -----------------
const defaultResume = {
  title: 'Professional Resume',
  profileInfo: { fullName: '', designation: '', summary: '' },
  contactInfo: {
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: '',
    website: '',
  },
  workExperience: [{ company: '', role: '', startDate: '', endDate: '', description: '' }],
  education: [{ degree: '', institution: '', startDate: '', endDate: '' }],
  skills: [{ name: '', progress: 0 }],
  projects: [{ title: '', description: '', github: '', liveDemo: '' }],
  certifications: [{ title: '', issuer: '', year: '' }],
  languages: [{ name: '', progress: 0 }],
  interests: [''],
  template: { theme: 'modern', colorPalette: [] },
};

const EditResume = () => {
  const { resumeId } = useParams();
  const navigate = useNavigate();
  const resumeDownloadRef = useRef(null);
  const previewContainerRef = useRef(null);

  const [resumeData, setResumeData] = useState(defaultResume);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(33);

  const [openThemeSelector, setOpenThemeSelector] = useState(false);
  const [openPreviewModal, setOpenPreviewModal] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const completionPercentage = 50; // example, can compute dynamically
  const previewWidth = previewContainerRef.current?.offsetWidth || 800;

  // ----------------- STEP ONE -----------------
  const StepOnePersonalInfo = () => (
    <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

      <div>
        <label className="block text-sm font-medium mb-1">Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={resumeData?.profileInfo?.fullName || ''}
          onChange={(e) =>
            setResumeData((prev) => ({
              ...prev,
              profileInfo: { ...prev.profileInfo, fullName: e.target.value },
            }))
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Designation</label>
        <input
          type="text"
          placeholder="e.g. Software Engineer"
          className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={resumeData?.profileInfo?.designation || ''}
          onChange={(e) =>
            setResumeData((prev) => ({
              ...prev,
              profileInfo: { ...prev.profileInfo, designation: e.target.value },
            }))
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Summary</label>
        <textarea
          placeholder="Write a short professional summary"
          className="w-full rounded-md border border-gray-300 p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={resumeData?.profileInfo?.summary || ''}
          onChange={(e) =>
            setResumeData((prev) => ({
              ...prev,
              profileInfo: { ...prev.profileInfo, summary: e.target.value },
            }))
          }
        />
      </div>
    </div>
  );

  const renderForm = () => {
    switch (step) {
      case 0:
        return <StepOnePersonalInfo />;
      case 1:
        return <div className="p-4 text-gray-700">Step 2 placeholder</div>;
      case 2:
        return <div className="p-4 text-gray-700">Step 3 placeholder</div>;
      default:
        return null;
    }
  };

  const nextStep = () => {
    const newStep = Math.min(step + 1, 2);
    setStep(newStep);
    setProgress(((newStep + 1) / 3) * 100);
  };

  const goBack = () => {
    const newStep = Math.max(step - 1, 0);
    setStep(newStep);
    setProgress(((newStep + 1) / 3) * 100);
  };

  // ----------------- API -----------------
  const fetchResumeDetailsById = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('No token found. Please login again.');
        navigate('/');
        return;
      }

      const response = await axiosInstance.get(API_PATHS.RESUME.GET_BY_ID(resumeId), {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data) {
        setResumeData((prev) => ({
          ...prev,
          ...response.data,
          profileInfo: { ...prev.profileInfo, ...(response.data.profileInfo || {}) },
          contactInfo: { ...prev.contactInfo, ...(response.data.contactInfo || {}) },
        }));
      }
    } catch (error) {
      console.error('Error fetching resume:', error);
      toast.error('Failed to load resume data');
    }
  };

  const updateResumeDetails = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('No token found. Please login again.');
        navigate('/');
        return;
      }

      await axiosInstance.put(API_PATHS.RESUME.UPDATE(resumeId), resumeData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success('Resume updated successfully!');
    } catch (err) {
      console.error('Error updating resume:', err);
      toast.error('Failed to update resume');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteResume = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('No token found. Please login again.');
        navigate('/');
        return;
      }

      await axiosInstance.delete(API_PATHS.RESUME.DELETE(resumeId), {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success('Resume deleted successfully!');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error deleting resume:', error);
      toast.error('Failed to delete resume');
    } finally {
      setIsLoading(false);
    }
  };

  const downloadPDF = () => {
    if (!resumeDownloadRef.current) return;
    setIsDownloading(true);

    const element = resumeDownloadRef.current;

    html2pdf()
      .set({
        margin: 0.5,
        filename: `${resumeData.title}.pdf`,
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      })
      .from(element)
      .save()
      .finally(() => {
        setIsDownloading(false);
        setDownloadSuccess(true);
        setTimeout(() => setDownloadSuccess(false), 2000);
      });
  };

  useEffect(() => {
    if (resumeId) fetchResumeDetailsById();
  }, [resumeId]);

  return (
    <DashboardLayout>
      <div className={containerStyles.main}>
        <div className={containerStyles.header}>
          <TitleInput
            title={resumeData.title}
            setTitle={(value) => setResumeData((prev) => ({ ...prev, title: value }))}
          />

          <div className="flex flex-wrap items-center gap-3">
            <button onClick={() => setOpenThemeSelector(true)} className={buttonStyles.theme}>
              <Palette size={16} />
              <span className="text-sm">Theme</span>
            </button>

            <button
              onClick={handleDeleteResume}
              className={buttonStyles.delete}
              disabled={isLoading}
            >
              <Trash2 size={16} />
              <span className="text-sm">Delete</span>
            </button>

            <button onClick={() => setOpenPreviewModal(true)} className={buttonStyles.download}>
              <Download size={16} />
              <span className="text-sm">Preview</span>
            </button>
          </div>
        </div>

        <div className={containerStyles.grid}>
          <div className={containerStyles.formContainer}>
            <StepProgress progress={progress} />
            {renderForm()}

            <div className="p-4 sm:p-6">
              {errorMsg && (
                <div className={statusStyles.error}>
                  <AlertCircle size={16} />
                  {errorMsg}
                </div>
              )}

              <div className="flex flex-wrap items-center justify-end gap-3">
                <button className={buttonStyles.back} onClick={goBack} disabled={isLoading}>
                  <ArrowLeft size={16} /> Back
                </button>

                <button
                  className={buttonStyles.save}
                  onClick={updateResumeDetails}
                  disabled={isLoading}
                >
                  {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                  {isLoading ? 'Saving...' : 'Save & Exit'}
                </button>

                <button className={buttonStyles.next} onClick={nextStep} disabled={isLoading}>
                  Next
                </button>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className={containerStyles.previewContainer}>
              <div className="text-center mb-4">
                <div className={statusStyles.completionBadge}>
                  <div className={iconStyles.pulseDot}></div>
                  <span>Preview - {completionPercentage}% Complete</span>
                </div>
              </div>
              <div className="preview-container relative" ref={previewContainerRef}>
                <div className={containerStyles.previewInner}>
                  <RenderResume
                    key={`preview-${resumeData?.template?.theme}`}
                    templateId={resumeData?.template?.theme || ''}
                    resumeData={resumeData}
                    containerWidth={previewWidth}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Theme Modal */}
      <Modal
        isOpen={openThemeSelector}
        onClose={() => setOpenThemeSelector(false)}
        title="Change Theme"
      >
        <div className={containerStyles.modalContent}>
          <ThemeSelector
            selectedTheme={resumeData?.template.theme}
            setSelectTheme={(theme) =>
              setResumeData((prev) => ({
                ...prev,
                template: { ...prev.template, theme },
              }))
            }
            onClose={() => setOpenThemeSelector(false)}
          />
        </div>
      </Modal>

      {/* Preview/Download Modal */}
      <Modal
        isOpen={openPreviewModal}
        onClose={() => setOpenPreviewModal(false)}
        title={resumeData.title}
        showActionBtn
        actionBtnText={isDownloading ? 'Generating...' : downloadSuccess ? 'Downloaded!' : 'Download PDF'}
        actionBtnIcon={
          isDownloading ? (
            <Loader2 size={16} className="animate-spin" />
          ) : downloadSuccess ? (
            <Check size={16} className="text-white" />
          ) : (
            <Download size={16} />
          )
        }
        onActionClick={downloadPDF}
      >
        <div className={containerStyles.pdfPreview} ref={resumeDownloadRef}>
          <RenderResume
            key={`pdf-${resumeData?.template?.theme}`}
            templateId={resumeData?.template?.theme || ''}
            resumeData={resumeData}
            containerWidth={null}
          />
        </div>
      </Modal>
    </DashboardLayout>
  );
};

export default EditResume;
