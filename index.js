


const log_form_lId = document.forms['EDI_log']

log_form_lId.addEventListener('submit' ,(e) => {
    e.preventDefault()

    const log_by_id = document.getElementById("orgID").value

    const log_by_loadId = document.getElementById("loadId").value
    
    let url = `http://localhost:5984/ascend-edi-log/_design/log/_view/get_by_load_id?key=["${log_by_id}",${log_by_loadId}] `

    document.forms['EDI_log'].reset()
  
  
    return window.open(url,'_blank')
   

})

const log_form_sId = document.forms['EDI_log_sID']

log_form_sId.addEventListener('submit' ,(e) => {
    e.preventDefault()

    const log_by_id = document.getElementById("_orgID").value

    const log_by_shipId = document.getElementById("shipment_Id").value
    
    let url = `http://localhost:5984/ascend-edi-log/_design/log/_view/get_by_edi_id?key=[%22${log_by_id}%22,%22${log_by_shipId}%22] `

    document.forms['EDI_log_sID'].reset()
  
    return window.open(url,'_blank')
   

})

const unhandled = document.forms['EDI_Unhandled']

unhandled.addEventListener('submit' ,(e) => {
    e.preventDefault()

    const log_by_id = document.getElementById("UnhandledOrgId").value

   
    
    let url = `http://localhost:5984/ascend-edi/_design/tenders/_view/unhandled_by_org?startkey=[%22${log_by_id}%22,%22%22]&endkey=[%22${log_by_id}%22,{}] `

    document.forms['EDI_Unhandled'].reset()
  
    return window.open(url,'_blank')
   

})

const handled = document.forms['Doc_By_Day']

handled.addEventListener('submit' ,(e) => {
    e.preventDefault()

    const date_time = document.getElementById("docByDay").value

   
    
    let url = `http://dev.ascendtms.com:5984/ascend-edi/_design/log/_view/inbound?startkey=%22${date_time}%22&limit=100`

    document.forms['Doc_By_Day'].reset()
  
    return window.open(url,'_blank')
   

})
const doc_by_day = document.forms['Doc_By_Day']

    doc_by_day.addEventListener('submit' ,(e) => {
    e.preventDefault()

    const production = document.getElementById("p-flag").value
    const doc_type = document.getElementById("docType").value
    const startDate = document.getElementById("startDate").value
    const endDate = document.getElementById("endDate").value

   
    
    let url = `http://dev.ascendtms.com:5984/ascend-edi/_design/transactions/_view/processed_by_type?startkey=[%22${production.toUpperCase()}%22,%22${doc_type}%22,%22${startDate}%22]&endkey=[%22P%22,%22990%22,%22${endDate}%22]&include_docs=true`

    document.forms['Doc_By_Day'].reset()
  
    return window.open(url,'_blank')
   

})



















