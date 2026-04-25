    const colleges = [
      // Mumbai Colleges
      { id: 1, name: "Mithibai College", rating: 4.9, location: "Vile Parle", emoji: "🎓", stream: "Science, Commerce, Arts", link: "https://www.mithibai.ac.in" },
      { id: 2, name: "Jai Hind College", rating: 4.8, location: "Churchgate", emoji: "📖", stream: "Arts, Commerce", link: "https://www.jaihindcollege.ac.in" },
      { id: 3, name: "Narsee Monjee College", rating: 4.9, location: "Vile Parle", emoji: "💼", stream: "Commerce", link: "https://www.nmcce.ac.in" },
      { id: 4, name: "HR College", rating: 4.8, location: "Churchgate", emoji: "💼", stream: "Commerce", link: "https://www.hrcollege.edu" },
      { id: 5, name: "D.G. Ruparel College", rating: 4.7, location: "Matunga", emoji: "🔬", stream: "Science", link: "https://www.ruparel.edu" },
      { id: 6, name: "Ramnarain Ruia College", rating: 4.6, location: "Matunga", emoji: "📖", stream: "Arts", link: "https://www.ruiacollege.edu" },
      { id: 7, name: "K.J. Somaiya College", rating: 4.7, location: "Vidyavihar", emoji: "🎓", stream: "Science, Commerce", link: "https://www.somaiya.edu" },
      { id: 8, name: "St. Xavier's College", rating: 4.9, location: "Fort", emoji: "📖", stream: "Arts, Commerce", link: "https://www.xaviers.edu" },
      { id: 9, name: "Durgadevi Saraf College", rating: 4.5, location: "Malad", emoji: "🎓", stream: "Commerce, Science", link: "https://dsjc.rajasthani.org.in" },

      // Navi Mumbai Colleges
      { id: 10, name: "SIES College", rating: 4.7, location: "Nerul", emoji: "🎓", stream: "Science, Commerce, Arts", link: "https://www.siesascn.edu.in" },
      { id: 11, name: "Fr. Agnel's Junior College", rating: 4.6, location: "Vashi", emoji: "🔬", stream: "Science, Commerce", link: "https://www.fragnel.ac.in" },
      { id: 12, name: "Rao Junior College of Science", rating: 4.5, location: "Navi Mumbai", emoji: "🔬", stream: "Science", link: "https://www.raojuniorcollege.org" },
      { id: 13, name: "St. Mary's Junior College", rating: 4.4, location: "Vashi", emoji: "📖", stream: "Science, Commerce, Arts", link: "https://www.stmarysjc.ac.in" },
      { id: 14, name: "Western College of Commerce", rating: 4.3, location: "Sanpada", emoji: "💼", stream: "Commerce", link: "https://www.westerncollege.in" },
      { id: 15, name: "Pace Jr. Science College", rating: 4.6, location: "Nerul", emoji: "🔬", stream: "Science", link: "https://www.pacejuniorsciencecollege.com" }
    ];
    
    function renderColleges(data) {
      const grid = document.getElementById('collegesGrid');
      grid.innerHTML = data.map(college => `
        <div class="college-card">
          <div class="college-image">${college.emoji}</div>
          <div class="college-info">
            <h3>${college.name}</h3>
            <p><strong>Location:</strong> ${college.location}</p>
            <p><strong>Stream:</strong> ${college.stream}</p>
            <div class="rating">⭐ ${college.rating}</div>
            <div class="btn-group">
              <a href="${college.link}" target="_blank" class="btn btn-primary">Learn More</a>
              <button class="btn btn-secondary">Save</button>
            </div>
          </div>
        </div>
      `).join('');
    }
    
    function searchColleges() {
      const search = document.getElementById('searchInput').value.toLowerCase();
      const rating = parseFloat(document.getElementById('ratingFilter').value) || 0;
      const stream = document.getElementById('streamFilter').value;

      const filtered = colleges.filter(c => 
        c.name.toLowerCase().includes(search) &&
        c.rating >= rating &&
        (stream === "" || c.stream.includes(stream))
      );

      renderColleges(filtered);
    }
    
    renderColleges(colleges);
  