function getImageUrl(personId) {
    return "https://i.imgur.com/"+personId+".jpg";
}

function Avatar({ person, size }) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person.imageId)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default function AvatarProfile({ person, size }) {
    return (
        <Avatar person={person} size={size}/>
    );
}
