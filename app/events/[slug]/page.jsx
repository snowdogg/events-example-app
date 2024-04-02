import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../../components/builder";


// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);


export default async function EventPage(props) {
  console.log('heeeyy events page ')
  console.log(props?.params)
    const builderModelName = "event-page";

    const data = await builder.get('event-data', { 
        query:{
          data:{
            slug: props?.params?.slug
          }
        }
    }
      ).toPromise();
   

    const content = await builder.get(builderModelName, { 
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: '/events/' + (props?.params?.slug),
      }}
      ).toPromise();

    // console.log('content', content)
    // console.log('slug:',props?.params?.slug)
    // console.log('data', data)

  
    // console.log('content', content)

    console.log()

    return (
      <>
        {/* Render the Builder page */}
      
        <RenderBuilderContent content={content} model={builderModelName} data={{event: data}} />
      </>
    );
  }
  