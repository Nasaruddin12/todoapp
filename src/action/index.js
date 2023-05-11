export const userLogin = async () => {
    var resData;
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    await fetch("https://acapp.in/todo/public/user/login", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            resData = result
        })
        .catch(error => {
            console.log('error', error)
            resData = { status: 403, error: error }
        });
        return resData;
}
export const getTodo = async () => {
    var resData;
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    await fetch("https://acapp.in/todo/public/user/todo", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            resData = result
        })
        .catch(error => {
            console.log('error', error)
            resData = { status: 403, error: error }
        });
        return resData;
}

export const updateStatus=async(
    id,status
)=>{
    var resData;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "id":id,
      "status":status
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    await fetch("https://acapp.in/todo/public/todo/updateStatus", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            resData = result
        })
        .catch(error => {
            console.log('error', error)
            resData = { status: 403, error: error }
        });
        return resData;
}

export const addTodo=async(todo_name)=>{
    var resData;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "name":todo_name,
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    await fetch("https://acapp.in/todo/public/todo/create", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            resData = result
        })
        .catch(error => {
            console.log('error', error)
            resData = { status: 403, error: error }
        });
        return resData;
}

export const updateTodoText= async( id,todo_name)=>{
    var resData;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
       "id":id, 
      "name":todo_name,
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    await fetch("https://acapp.in/todo/public/todo/update", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            resData = result
        })
        .catch(error => {
            console.log('error', error)
            resData = { status: 403, error: error }
        });
        return resData;
}


export const deleteDO= async( id)=>{
    var resData;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
       "id":id
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    await fetch("https://acapp.in/todo/public/todo/delete", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            resData = result
        })
        .catch(error => {
            console.log('error', error)
            resData = { status: 403, error: error }
        });
        return resData;
}