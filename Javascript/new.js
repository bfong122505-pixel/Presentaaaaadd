// Updated global section switcher with hardware-accelerated rendering reset
function switchSection(targetSectionId) {
    // 1. Find all active display screens
    const sections = document.querySelectorAll('.presentation-section');
    
    sections.forEach(sec => {
        // Apply hidden properties
        sec.classList.add('hidden-slide');
    });

    // 2. Locate targeted screen destination
    const target = document.getElementById(targetSectionId);
    if (target) {
        // Remove hidden state structural flags
        target.classList.remove('hidden-slide');
        
        // Force browser layout update engine to trigger CSS transitions smoothly
        void target.offsetWidth; 
        
        // Directly append an inline animation sequence runtime rule
        target.style.animation = 'slideUpFadeIn 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards';
    }
    
    // Automatically reset presentation viewpoint coordinate focal parameters
    window.scrollTo({ top: 0, behavior: 'smooth' });
}