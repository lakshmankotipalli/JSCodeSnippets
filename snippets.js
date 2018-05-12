function codeSnippets () {

    // Returns first three letters of the month name i.e., 'Jan' etc.., by taking month count from controller
    // No strings accepted
		function getMonthName (monthCount) {
			if(!isNaN(monthCount) && monthCount > 0 && monthCount <= 12) {
				if(monthCount < 10) {
						monthCount = 0+monthCount;
				}
				var monthName = '';
				switch(monthCount) {
					case 01:
						monthName = 'Jan';
						break;
					case 02:
						monthName = 'Feb';
						break;
					case 03:
						monthName = 'Mar';
						break;
					case 04:
						monthName = 'Apr';
						break;
					case 05:
						monthName = 'May';
						break;
					case 06:
						monthName = 'Jun';
						break;
					case 07:
						monthName = 'Jul';
						break;
					case 08:
						monthName = 'Aug';
						break;
					case 09:
						monthName = 'Sep';
						break;
					case 10:
						monthName = 'Oct';
						break;
					case 11:
						monthName = 'Nov';
						break;
					case 12:
						monthName = 'Dec';
				}
				return monthName;
			} else {
				alert('Month should be a number value between 1 and 12');
			}
		};
		getMonthName(12);

		// Append Suffix for Dates from 1 and 31
		// No strings accepted
		function appendDateSuffix (date) {
			if(!isNaN(date) && date > 0 && date <= 31) {
				if(date != 11) {
						var modulo = date % 10;
				}
				var suffixed = '';
				switch (modulo) {
					case 1:
						suffixed = date+'st';
						break;
					case 2:
						suffixed = date+'nd';
						break;
					case 3:
						suffixed = date+'rd';
						break;
					default:
						suffixed = date+'th'
				}
	
				if(date == 11) {
					suffixed = date+'th';
				}
				console.log(suffixed);
				return suffixed;
			} else {
				alert('Date should be a number value between 1 and 31')
			}
		};
		appendDateSuffix(30);
};

codeSnippets();