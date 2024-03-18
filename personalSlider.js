var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            var personalSlider = document.querySelector('.personalSlider');
            var slidesArray = []; 
            var totalCount = Object.keys(data).length;
            var slidesPerPage = 3;
            var totalPages = Math.ceil(totalCount / slidesPerPage);
            var currentPage = 0;

            function createSlide(doctors) {
                var docContainer = document.createElement('div');
                docContainer.classList.add('doc-container');

                doctors.forEach(function(doctor) {
                    var docElement = document.createElement('div');
                    docElement.classList.add('doc');

                    var nameElement = document.createElement('p');
                    nameElement.classList.add('docName');
                    nameElement.textContent = doctor.docName;

                    var descElement = document.createElement('p');
                    descElement.classList.add('docDesc');
                    descElement.textContent = doctor.docDesc;

                    var imgElement = document.createElement('img');
                    imgElement.classList.add('docImg');
                    imgElement.src = doctor.docImg;

                    docElement.appendChild(nameElement);
                    docElement.appendChild(descElement);
                    docElement.appendChild(imgElement);

                    docContainer.appendChild(docElement);
                });

                personalSlider.appendChild(docContainer);
                slidesArray.push(docContainer);
            }

            var doctorsArray = [];
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    var doctor = data[key];
                    doctorsArray.push(doctor);
                    if (doctorsArray.length === slidesPerPage) {
                        createSlide(doctorsArray);
                        doctorsArray = [];
                    }
                }
            }

            if (doctorsArray.length > 0) {
                createSlide(doctorsArray);
            }

            function showSlide(index) {
                slidesArray.forEach(function(slide) {
                    slide.style.display = 'none';
                });
                slidesArray[index].style.display = 'flex';
            }

            showSlide(currentPage);

            document.getElementById('prevBtn').addEventListener('click', function() {
                currentPage = (currentPage - 1 + totalPages) % totalPages;
                showSlide(currentPage);
            });

            document.getElementById('nextBtn').addEventListener('click', function() {
                currentPage = (currentPage + 1) % totalPages;
                showSlide(currentPage);
            });
        }
    }
};

xhr.open('GET', 'doc.json', true);
xhr.send();
