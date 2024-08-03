document.getElementById('resume-btn').addEventListener('click', function() {
 
    const link = document.createElement('a');
 
    link.href = 'resume/Resume.pdf'; 

    link.download = 'Resume.pdf'; 
  
    document.body.appendChild(link);
 
    link.click();
    
    document.body.removeChild(link);
});
