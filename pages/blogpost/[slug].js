import React from 'react'
import { useRouter } from 'next/router'
const slug = () => {
    const router = useRouter();
    const { slug } = router.query
    return (
        <div className='container'>
        <center>
        <h2>Title of Page {slug}</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus vel veniam cupiditate ea. Cum, aspernatur voluptatibus et explicabo dicta in molestiae repellat dolores ab. Quaerat animi, alias ipsum facilis a suscipit corporis quasi consequatur optio sapiente reiciendis quo provident sint laborum veritatis voluptatum asperiores voluptas consequuntur maxime! Vitae quos harum quidem sequi assumenda. Illum vel enim praesentium optio harum. Quibusdam, quo sunt, esse reiciendis blanditiis alias illo a obcaecati vero libero maiores! Architecto rem optio distinctio nobis sunt beatae. Autem earum enim ab, sed debitis ullam! Earum ullam mollitia, corrupti cumque odio id aperiam vitae quibusdam iure iste porro quam deserunt amet dignissimos vel tempora deleniti neque necessitatibus omnis ipsa corporis modi consequuntur! Accusamus ut fugiat, voluptas dolor inventore quos hic aperiam impedit nulla quaerat? Doloribus, est delectus inventore consequuntur ipsam eum ea vitae maiores fugit sint neque officiis quae repellat omnis dolores temporibus aperiam? Reprehenderit laboriosam numquam harum quos amet a nostrum praesentium cumque porro quas facere accusantium, beatae dicta adipisci fugiat expedita mollitia magni. Voluptatibus mollitia voluptate quasi atque. Saepe maiores, voluptatum aspernatur minima in mollitia ex inventore ullam. Omnis tenetur magnam pariatur dolore ad. Quam quas velit perspiciatis qui repellendus animi repudiandae officiis modi magni. Cupiditate corporis fuga reprehenderit libero recusandae, dignissimos voluptatibus voluptatum nesciunt doloribus quis ea culpa velit ab odio, inventore voluptates dicta neque, similique a ratione soluta sint. Excepturi architecto tempora amet a recusandae repellat aliquid, sunt error? Maiores sapiente unde fugit excepturi debitis repudiandae autem consectetur modi doloribus? Deleniti praesentium adipisci alias doloremque vero enim. Fuga officiis harum ad suscipit quod vel et itaque sit sed natus! Aliquid, nesciunt voluptas aliquam sapiente totam quod eligendi cumque itaque reiciendis repudiandae minus esse voluptates corporis autem et omnis inventore sint neque quis, velit deserunt mollitia nemo excepturi. Quidem, nisi explicabo. Ipsam vel dicta rem praesentium.</p>
        </center>
        </div>
    )
}

export default slug