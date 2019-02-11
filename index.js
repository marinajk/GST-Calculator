var t = document.getElementsByClassName("textboxes");

var perform=(keyObj)=>
        {
             if(((np.value)!=null) && ((gst.value)!=null) )
            {
                ta.value=(((gst.value)/100)*(np.value));
                gp.value=parseFloat(ta.value)+parseFloat(np.value);   
            }
             else if(((gp.value)!=null) && ((gst.value)!=null))
            {
                ta.value=(((gst.value)/100)*(gp.value));
                np.value=((gp.value)-(ta.value));
            }
             else if(((gp.value)!=null) && ((ta.value)!=null))
            {
                np.value=(gp.value)-(ta.value);
                gst.value=(((ta.value)*100)/(np.value));
            }
            else if(((ta.value)!=null) && ((np.value)!=null))
            {
                gp.value=parseFloat(np.value)+parseFloat(ta.value);
                gst.value=(((ta.value)*100)/(np.value));
            }
            else if(((np.value)!=null) && ((gp.value)!=null))
            {
                ta.value=((gp.value)-(np.value));
                gst.value=(((ta.value)*100)/(np.value));
            }
             else if(((gst.value)!=null) && ((ta.value)!=null))
            {
                np.value=(((ta.value)*100)/(gst.value));
                gp.value=parseFloat(np.value)+parseFloat(ta.value);
            }
        }

    for (let i=0;i<t.length;i++)
{
    t[i].addEventListener("keyup",perform,false);

}
 