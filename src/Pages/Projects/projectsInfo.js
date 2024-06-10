import { anirudh,
  RISEInfo,RISECard,
  uSucceedCard,uSucceedInfo,
  APCard,APInfo } from "@/images";

export const projectsInfo = [

    {
      'id': 1,
      'title': 'P3DB',
      'images': {
        'card': uSucceedCard,
        'flow': uSucceedInfo,
      },
      'description': 'Developed a protein structure analysis application using Angular to enhance visualization and understanding of protein interactions.',
      'info': ' The P3DB faced challenges with effectively visualizing and interpreting complex protien-protein interaction data. The existing system lacked an intuitive interface, making it difficult for users to understand and analyze the protien structures and their interactions. By levaraging Angular, I developed a dynamic and interactive P3DB application. The new interface utilized advanced data visualization techniques to provide clear representations of protien interactions. Collaborating with bioinformatics experts, I ensured that the scientific data was accurately translated into user-friendly visualizations. The implementation of efficient coding practices and Angulars capabilities significantly improved the performance and scalabitlity of application, resulting in a more responsive and reliable user experience.',
      'youtube': '',
    },
    {
      'id': 2,
      'title': 'N_Rate',
      'images': {
        'card': RISECard,
        'flow': RISEInfo,
      },
      'description': 'Developed a web application to analyze and enhance nitrogen (N) fertilizer recommendations for crop production, incorporating advanced soil health measurements and biological nitrogen efficiency enhancers.',
      'info': 'Current nitrogen fertilizer recommendations do not adequately account for the biology of nitrogen processes, making it difficult to predict soil organic pools ability to supply and retain crop-available nitrogen.This gap limits the effectiveness of current nitrogen management practices and increases uncertainty in fertilizer recommendations. Developed a web application to enhance nitrogen (N) fertilizer recommendations by integrating "soil health" measurements, weather data, and landscape variations. Using Django and Python, the backend processes complex data and provides accurate analyses of N-rate impacts from biological enhancers and soil health practices. The application offers an interactive, user-friendly interface built with JavaScript, allowing users to visualize and understand the effects of different N fertilizer strategies on crop productivity. The system connects to an MSSQL server using MySQL database, ensuring efficient data storage, retrieval, and management, thus enhancing the applications performance and reliability.',
      'youtube': '',
    },
    
    {
      'id':4,
      'title': 'Protien Analysis',
      'images': {
        'card': APCard,
        'flow': APInfo,
      },
      'description': 'Developed a web application for single-cell protein analysis to enhance the understanding of protein functions and interactions at the cellular level.',
      'info':'Designed and implemented a workflow to analyze results from various single-cell protein analysis methods, ensuring comprehensive data evaluation. Developed interactive features that allow users to report application issues directly to Git issues, streamlining the bug tracking and resolution process. Utilized Python for backend processing, JavaScript for frontend development, Docker for containerization, and REST APIs for seamless communication between services. Ensured efficient data handling and processing to provide accurate and reliable analysis results, facilitating better scientific insights.',
      'youtube': '',
    },
  ];
