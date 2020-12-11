export default function ProjectDetails(props) {
    return(
        <div>
            <h1>{props.project.name}</h1>
            <h3>{props.project.language}</h3>
            <a href={props.project.link}>Project Github</a>
        </div>
    )
} 