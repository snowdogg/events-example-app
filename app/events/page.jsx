import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";


// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);


export default async function Events(props) {
  

    console.log('heyy events ');
    const builderModelName = 'page';

    const content = await builder.get(builderModelName, { 
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: '/events'
      }}
      ).toPromise();

    console.log('content', content)
    
    

    return (
      <>
        {/* Render the Builder page */}
        <RenderBuilderContent content={content} model={builderModelName}  />
      </>
    );
  }
  