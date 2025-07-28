//your JS code here. If required.
const counterpara = document.getElementById('counter');
		const incrementbtn = document.getElementById('incrementBtn');

		incrementbtn.AddEventListener('click' , function(){
         const cnt = parseInt(counterpara.textContent);

			alert("Current value: " + cnt);

			counterpara.textContent = cnt + 1;
		})