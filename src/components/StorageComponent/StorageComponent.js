import {useLocalStorage,useSessionStorage} from '../../hooks/useStorage';

const StorageComponent = () => {
    const [name,setName,removeName] = useSessionStorage("name","Vladi");
    const [age,setAge,removeAge] = useLocalStorage("age",34);
    return (
        <div>
            <div>
                {name} - {age}
            </div>
            <button onClick={()=>{
                setName('Anna');
            }}>setname</button>
            <button onClick={()=>{
                setAge(40);
            }}>setage</button>
            <button onClick={removeName}>remove name</button>
            <button onClick={removeAge}>remove age</button>
        </div>
    )
}

export default StorageComponent;