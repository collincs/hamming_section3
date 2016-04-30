var compute;

// computes the Hamming distance from 
// two nucleotide strands: s1 and s2
compute = function(s1, s2) {
	// this is what the program returns
	// defaults to zero, i.e. identical strands
	if (s1.length !== s2.length) {
			// throw an error
			throw new Error('DNA strands must be of equal length.');
		}

	var distance = 0;
	// calculate the Hamming distance 
	// for each character in the strands
	for(var i = 0; i < s1.length; i += 1 ) {
		// if the character in s1 is not 
		// equal to the character in s2
		if (s1[i] !== s2[i]) {
			// add one to the Hamming distance
			distance += 1;
		}

	}


	// this is where it gets returned
	return distance
};

module.exports = {
	compute: compute,

	};
