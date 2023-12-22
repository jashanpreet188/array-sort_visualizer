
function visualizeBubbleSort() {
    const arrayInput = document.getElementById('arrayInput').value;
    const originalArray = arrayInput.split(',').map(num => parseInt(num));
    const array = [...originalArray];

    const visualization = document.getElementById('visualization');
    visualization.innerHTML = '';

    // Function to update visualization
    function updateVisualization1() {
        const stepDiv = document.createElement('div');
        stepDiv.innerHTML = array.map(num => `<span>${num}</span>`).join(' ');
        visualization.appendChild(stepDiv);
      
    }

    // Bubble Sort algorithm
    const n = array.length;
    let swapped;

    (function bubbleSortStep(i) {
        if (i < n - 1) {
            swapped = false;
            for (let j = 0; j < n - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    // Swap elements
                    const temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;

                    swapped = true;
                }
            }

            // Update visualization after the current step
            setTimeout(function() {
                updateVisualization1();
                if (swapped) {
                  
                    bubbleSortStep(i + 1);
                }
            }, 2000); 
        } else {
            // Display the final sorted array
            const finalStepDiv = document.createElement('div');
            finalStepDiv.textContent = 'Sorted Array: ' + array.join(', ');
            visualization.appendChild(finalStepDiv);
        }
    })(0);
}
function visualizeInsertionSort() {
  const arrayInput = document.getElementById('arrayInput').value;
  const originalArray = arrayInput.split(',').map(num => parseInt(num));
  const array = [...originalArray];

  const visualization = document.getElementById('visualization');
  visualization.innerHTML = '';

  // Function to update visualization
  function updateVisualization2() {
    const stepDiv = document.createElement('div');
    stepDiv.innerHTML = array.map(num => `<span>${num}</span>`).join(' ');
    visualization.appendChild(stepDiv);

   
  }

  
let i=0;
    (function insertElement(i) {
      const n = array.length;
  
      let key = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j--;
      }
        
        array[j + 1] = key;

        setTimeout(function() {
          updateVisualization2();
          if (i < n-1 ) {
            
            
           
            insertElement(i+1);
          }
        }, 2000);
      
    })(0);
  
}
function visualizeSelectionSort() {
  const arrayInput = document.getElementById('arrayInput').value;
  const originalArray = arrayInput.split(',').map(num => parseInt(num));
  const array = [...originalArray];

  const visualization = document.getElementById('visualization');
  visualization.innerHTML = '';

  // Function to update visualization
  function updateVisualization3() {
    const stepDiv = document.createElement('div');
    stepDiv.innerHTML = array.map(num => `<span>${num}</span>`).join(' ');
    visualization.appendChild(stepDiv);

    
  }

  const n = array.length;
  let min;
  let i=0;
  (function selectionSortStep(i) {
    min = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    

     
        
         
          if (min !== i) {
            const temp = array[i];
            array[i] = array[min];
            array[min] = temp;
            
        }
      
    setTimeout(
      function(){
        updateVisualization3();
        if(i<n-1)
        {
      selectionSortStep(i+1);
      
      
      }
                }
    ,2000);  
    
  })(0);
}
StepDiv.classList.toggle("flash");

function visualizeMergeSort() {
  const arrayInput = document.getElementById('arrayInput').value;
  const originalArray = arrayInput.split(',').map(num => parseInt(num));
  const array = [...originalArray];

  const visualization = document.getElementById('visualization');
  visualization.innerHTML = '';

  // Function to update visualization
  function updateVisualization() {
    const stepDiv = document.createElement('div');
    stepDiv.innerHTML = array.map(num => `<span>${num}</span>`).join(' ');
    visualization.appendChild(stepDiv);
  }

  // Merge Sort algorithm
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
  }

  function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }

  // Perform merge sort with timeout for visualization
  const sortedArray = mergeSort(array);
  const delay = 2000;

  let i = 0;
  (function mergeSortStep(i) {
    if (i < sortedArray.length) {
      array[i] = sortedArray[i];
      updateVisualization();

      setTimeout(function() {
        mergeSortStep(i + 1);
      }, delay);
    }
  })(0);
}
function selectyourSort(){
let selected=document.getElementById("sorttype").value;
if(selected=="bubble"){
  visualizeBubbleSort();
}
else if(selected=="insertion"){
  visualizeInsertionSort();
}
else if(selected=="selection"){
  visualizeSelectionSort();
}
else if(selected=="merge"){
  visualizeMergeSort();
}
}