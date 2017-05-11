
 hidden div ->


<div id="divCheckbox" style="display: none;">

-------------------------------------------
javascript show hidden div when select option is selected


<select id="test" name="form_select" onchange="showDiv(this)">
   <option value="0">No</option>
   <option value ="1">Yes</option>
</select>

<div id="hidden_div" style="display: none;">Hello hidden content</div>
<div id="hidden_div1" style="display: none;">Hello hidden content</div>


<script>
function showDiv(elem){
   if(elem.value == 1)
      document.getElementById('hidden_div').style.display = "block";     //it will show
      document.getElementById('hidden_div1').style.display = "none";    //another will hide
}
</script>
--------------------------------------------------------------
