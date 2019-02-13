var t = document.getElementsByClassName("texts");
var perform=()=>
{
    var np1 = false;
    var gst1 = false;
    var gp1 = false;
    var ta1 = false;
    
    if (np.value != null)
        np1 = true;
    if (gst.value != null)
        gst1 = true;
    if (gp.value != null)
        gp1 = true;
    if (ta.value != null)
        ta1 = true;

    if(np1)
    {
        if(gst1)
        {
            ta.value=(((gst.value)/100)*(np.value));
            gp.value=parseFloat(ta.value)+parseFloat(np.value); 
        }
        else if(gp1)
        {
            ta.value=((gp.value)-(np.value));
            gst.value=(((ta.value)*100)/(np.value));
        }
        else if(ta1)
        {
            gp.value=parseFloat(np.value)+parseFloat(ta.value);
            gst.value=(((ta.value)*100)/(np.value));
        }
    }
    else  if(gst1)
    {
        if(np1)
        {
            ta.value=(((gst.value)/100)*(np.value));
            gp.value=parseFloat(ta.value)+parseFloat(np.value);
        }
        else if(gp1)
        {
            ta.value=(((gst.value)/100)*(gp.value));
            np.value=((gp.value)-(ta.value));
        }
        else if(ta1)
        {
            np.value=(((ta.value)*100)/(gst.value));
            gp.value=parseFloat(np.value)+parseFloat(ta.value);
        }
    }
  else if(gp1)
    {
        if(np1)
        {
            ta.value=((gp.value)-(np.value));
            gst.value=(((ta.value)*100)/(np.value));
        }
        else if(gst1)
        {
            ta.value=(((gst.value)/100)*(gp.value));
            np.value=((gp.value)-(ta.value));
        }
        else if(ta1)
        {
            np.value=(gp.value)-(ta.value);
            gst.value=(((ta.value)*100)/(np.value));
        }

    }
    else  if(ta1)
    {
        if(np1)
        {
            gp.value=parseFloat(np.value)+parseFloat(ta.value);
            gst.value=(((ta.value)*100)/(np.value));
        }
        else if(gst1)
        {
            np.value=(((ta.value)*100)/(gst.value));
            gp.value=parseFloat(np.value)+parseFloat(ta.value);
        }
        else if(gp1)
        {
            np.value=(gp.value)-(ta.value);
            gst.value=(((ta.value)*100)/(np.value));
        }
    }
}

for (let i = 0; i < t.length; i++) {
    t[i].addEventListener("keyup", perform, false);

}
