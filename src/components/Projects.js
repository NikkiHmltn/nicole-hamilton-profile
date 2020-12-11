import {Link} from 'react-router-dom'

export default function Projects(props) {
    
    const projectItem = props.projectItems.map((item) => {
        return <li><Link to={`/projects/${item.id}`}>{item.name}</Link></li>
    })

    return(
        <div>
            <h1> My Projects </h1>
            <ul>
                {projectItem}
            </ul>
        </div>
    )
} 