document.getElementById('downloadButton').addEventListener('click', function() {
  const fileUrl = 'D:/JOB/Bradley_Timon_Onyango_Curriculum%20Vitae_HK.pdf';
  
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = 'resume.pdf';
  
  link.click();
});
