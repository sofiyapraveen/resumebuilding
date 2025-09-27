// import React from 'react'
// import { TemplateCard } from './Cards'
// import TemplateOne from './TemplateOne'
// import TemplateTwo from './TemplateTwo'
// import TemplateThree from './TemplateThree'

// const RenderResume = ({
//     templateId,
//     resumeData,
//     containerWidth,
// }) => {
//     switch(templateId){
//         case "01":
//   return (
//    <TemplateOne resumeData={resumeData} containerWidth={containerWidth}/>
//   )
//      case "02":
//   return (
//    <TemplateTwo resumeData={resumeData} containerWidth={containerWidth}/>
//   )
//      case "03":
//   return (
//    <TemplateThree resumeData={resumeData} containerWidth={containerWidth}/>
//   )

//   default:
//     return(
//         <TemplateOne resumeData={resumeData} containerWidth={containerWidth}/>
//     )

// }
// }
// export default RenderResume


import React from 'react';
import TemplateOne from './TemplateOne';
import TemplateTwo from './TemplateTwo';
import TemplateThree from './TemplateThree';

const templates = {
  "01": TemplateOne,
  "02": TemplateTwo,
  "03": TemplateThree,
};

const RenderResume = ({ templateId, resumeData, containerWidth }) => {
  const SelectedTemplate = templates[templateId] || TemplateOne;

  return <SelectedTemplate resumeData={resumeData} containerWidth={containerWidth} />;
};

export default RenderResume;
