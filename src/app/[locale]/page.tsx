import { Container, Typography } from "@mui/material";
import Layout from "../../client/components/Layout";
import TranslationsProvider from "../../client/components/TranslationsProvider";
import { i18nNamespaces } from "../../core/utils/i18nNamespaces";
import initializeTranslations from "../i18n";
import { LocaleParamsProps } from "./layout";

export default async function Home({ params }: LocaleParamsProps) {
  const locale = params.locale;

  const { t, resources } = await initializeTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={params.locale} resources={resources}>
      <Layout>
        <Container maxWidth="lg">
          <Typography variant="h6" color={"primary.main"}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolore perferendis nemo iste mollitia
            fuga explicabo fugiat magni cumque ut eum quae corporis aliquid at tempora, ad accusamus ullam earum maxime
            nostrum a eaque iure optio. Veritatis vel quos fugiat iure? Tempore nemo adipisci deserunt impedit fugit
            dolorem saepe pariatur, aliquid quis odit porro id, qui optio. Aperiam molestias id, cumque molestiae
            ratione, corrupti sunt nulla ea ipsa a exercitationem dicta quasi aliquam ipsam beatae fuga minus
            consectetur quidem! Soluta iure quidem, ea, nulla itaque, magni reiciendis asperiores quos ipsam accusamus
            dignissimos aspernatur aliquam mollitia quis unde! Placeat omnis nihil reiciendis et sint? Harum ex,
            excepturi quae minus laboriosam aspernatur quod. Eveniet similique perspiciatis velit possimus quis nam rem
            alias enim non a, voluptatum et laboriosam hic? Sapiente libero incidunt cupiditate esse quis accusamus
            assumenda, soluta optio magnam. Atque obcaecati voluptas cum voluptates earum in quas inventore rem eaque
            corrupti blanditiis, sint odit ratione quod quibusdam soluta omnis ad nihil ducimus tenetur quasi distinctio
            voluptate facilis. Harum sed debitis dolorum architecto hic eligendi possimus repellendus culpa unde
            repellat fugiat veritatis dignissimos nisi libero deleniti vitae, rerum eum beatae at quisquam saepe
            cupiditate. Molestias quo perferendis, temporibus itaque nesciunt dicta omnis ea blanditiis nulla voluptates
            quod obcaecati quae iusto velit impedit neque sequi veritatis minus eius, harum veniam vel necessitatibus!
            Architecto dolore at inventore quas distinctio magni, animi deserunt tempore nesciunt ullam dignissimos,
            quae ad nostrum laudantium saepe possimus quibusdam non error fugiat ratione itaque soluta nulla? Similique
            maxime dolore fugiat excepturi reprehenderit reiciendis temporibus debitis dolores quaerat cupiditate
            molestias deleniti, a, saepe autem doloribus! Provident sequi, voluptas repellendus minima tenetur ut.
            Accusantium vero voluptatum itaque aut, dolor tenetur odio eum laborum temporibus doloribus sed incidunt
            recusandae ut libero corrupti quam nostrum culpa repudiandae iste excepturi ipsam! Natus voluptatem aliquid
            minus et quas dolore nisi maiores recusandae commodi, excepturi porro quam velit ipsam reiciendis suscipit
            odit debitis, quo consequuntur numquam optio eius iusto? Saepe obcaecati nobis enim neque natus nesciunt
            aperiam facilis laborum officiis, nihil eaque esse similique quasi dolor ex aut eligendi laboriosam a velit
            id cumque? Impedit minus vero illo explicabo voluptate ratione voluptas iste repudiandae quod illum et
            nostrum tenetur deleniti nemo culpa quis rerum, quas odio sunt ipsam suscipit molestiae mollitia deserunt
            facilis. Numquam molestias magnam iusto exercitationem sint cum libero eius possimus. Vitae, optio vel. Rem
            temporibus quibusdam quas facere laudantium ullam dolore, corporis quos distinctio aliquam tempora error
            molestias nisi nemo a tenetur nostrum provident repudiandae sint laborum eaque. Provident numquam illum,
            iure assumenda voluptatem dolor recusandae quae tempore ipsam accusantium impedit veritatis dolore
            repellendus laudantium quibusdam eum ducimus esse aspernatur? Voluptatibus non, voluptatum reprehenderit
            corporis deserunt consequuntur pariatur laudantium tenetur, fuga magni alias iure ipsa commodi delectus.
            Tenetur harum ab inventore incidunt fugit nesciunt? Eum, voluptates vel sapiente fugit perspiciatis velit?
            Beatae corporis dolorem, voluptatum doloribus fugiat, sit dignissimos est natus eveniet harum sunt! Quam
            quibusdam molestiae vero, tempore expedita cumque dolorem tempora, perferendis harum dignissimos laboriosam
            magni nulla repudiandae quidem totam, eum vitae quisquam aperiam ullam. Sit corrupti minus magnam, velit cum
            amet ea id repellat harum est in quaerat veniam doloremque omnis veritatis accusamus, voluptates odio ipsum
            aliquid autem deserunt a rem necessitatibus eaque? Non rem aliquid voluptatem ipsam neque rerum ex
            asperiores totam, pariatur, nihil dolores necessitatibus iure cum sed laudantium ab labore aliquam ad! Ea
            exercitationem provident eius reiciendis, porro deserunt illo dolor rem non rerum eos mollitia laboriosam
            incidunt ullam possimus. Illo nihil quos quis dolores alias, dicta quas sequi fuga eaque, accusantium vitae
            explicabo sint omnis. Amet quas nam, eius ducimus omnis accusamus. Vel quo nobis repudiandae ullam quae.
            Quidem aliquam voluptas beatae perferendis quia dolorum debitis rem eius odio ad quam dolor dicta cum
            nesciunt excepturi voluptatem magni laudantium impedit ipsam eaque a hic, dolore minima! Sapiente ex
            corporis minima non magni reiciendis odit dolores nostrum provident expedita fugit voluptatum quae ipsum
            atque nesciunt accusantium minus, perferendis voluptas vel dignissimos, ipsa facilis! At sapiente maiores
            distinctio odit excepturi rem atque error incidunt. Molestiae quis a voluptatem consectetur fuga, veritatis
            ipsa neque ab placeat dignissimos minima vitae quam hic et pariatur suscipit animi quasi tempora, facere
            maxime eveniet dolores accusantium. Tempora optio voluptas soluta assumenda aut maxime asperiores
            consequatur repellendus labore saepe quo hic minus dolorem dignissimos, suscipit reiciendis libero, ipsa est
            excepturi accusantium ratione nihil, earum voluptatibus alias. Corporis maiores earum expedita quam fugiat
            ex nemo, asperiores ea laboriosam consectetur aut, possimus quaerat et quae vel. Officiis ullam fugiat
            quaerat debitis esse quidem voluptatum, corrupti sed harum soluta, neque aut totam voluptas quas ipsam quia
            voluptates eveniet ea assumenda ipsa molestias enim! Fugiat quisquam tempore nemo, atque dignissimos ea
            velit dolores cumque, unde id voluptatum labore quibusdam excepturi iste ipsa officia vero quasi
            reprehenderit? Distinctio asperiores adipisci inventore, quod ab magnam at! Sit fuga libero nesciunt, quasi
            tenetur illum iure voluptatum hic blanditiis facilis adipisci voluptas sequi natus, corrupti dolor earum
            molestiae optio voluptates consequuntur possimus error, perferendis quos quod. Distinctio, delectus
            blanditiis. Accusantium ratione provident quibusdam recusandae quos praesentium tempora labore tempore non,
            assumenda nobis quidem fugit id veniam dolorem vel nisi consequuntur atque est necessitatibus modi
            perspiciatis architecto minima laudantium. Exercitationem odio temporibus a nisi quia dicta reprehenderit id
            praesentium fugiat, explicabo, in sapiente magni molestiae. Commodi, impedit. Saepe et reprehenderit
            repellat consequuntur autem culpa consectetur pariatur enim vel nihil aperiam dolor quidem fugit minima, non
            cupiditate dolorum possimus similique nisi ipsum perspiciatis, eveniet omnis. Recusandae explicabo tempore
            sint provident cupiditate dolorum rerum nemo nulla omnis fugiat et nisi quidem, neque voluptatem? Ipsam
            veritatis rem dolor molestiae, ea voluptate est ullam provident tenetur non voluptatum voluptatibus placeat
            voluptas neque? Voluptatem saepe, et earum quidem, facere, qui facilis perferendis accusantium nobis
            molestias distinctio vero laboriosam voluptates? Quasi voluptate autem totam. Fuga beatae natus mollitia
            libero eligendi tempora, blanditiis assumenda dolores eum corrupti, possimus sed animi maxime? Veniam,
            aliquam, illo sed non veritatis quisquam esse delectus cum facilis exercitationem quis facere possimus
            minima voluptatem alias eum fugit et! Inventore cupiditate, aliquid vero necessitatibus ad, sapiente esse
            quo perspiciatis, voluptatum possimus ea odio omnis et nobis a quisquam ex repudiandae voluptatem. Fugit,
            quo sequi! Voluptatum expedita fugit, voluptate similique hic nesciunt nobis eligendi deserunt unde? Ipsam
            quas nobis libero suscipit. Quos, alias provident. Laudantium, tempora odio expedita quidem incidunt ab quae
            repellat asperiores obcaecati, ratione ea repellendus ad voluptatibus officiis dolor similique dignissimos
            quia cupiditate. Aperiam mollitia et asperiores. Porro obcaecati reprehenderit, et eum facere aliquid
            assumenda? Sit nobis rem et, perspiciatis a consequuntur! Recusandae numquam velit assumenda possimus
            itaque? Recusandae nisi sed necessitatibus expedita quaerat reprehenderit, inventore molestias adipisci?
            Illo provident dicta magni, delectus incidunt vero libero, sequi fugiat sunt officia culpa. Velit neque ab
            magni minus officia, quisquam alias dolorem ipsa eos autem saepe nam quibusdam excepturi nobis commodi!
            Animi quasi eaque ducimus quos? Ea repellat voluptate reiciendis soluta quisquam doloremque dicta obcaecati
            accusamus at delectus, consequuntur, sed aspernatur quibusdam, iste vel reprehenderit quod voluptatibus
            pariatur! Pariatur tempora commodi corrupti porro hic quibusdam ea officiis quas facilis, maxime delectus
            doloribus ipsam numquam sequi, tenetur labore debitis repellendus vel ratione, laudantium eius similique
            accusamus. Consequatur dolore deserunt, rerum dignissimos ex illo ullam! Eligendi error vero minima, sint
            distinctio corporis, nobis nulla, dolor eveniet aperiam cum aut tenetur perspiciatis exercitationem magni.
            Nostrum esse sit eligendi neque nesciunt natus distinctio amet dolor impedit! Maxime est laborum accusamus
            ab, nobis laboriosam dolor voluptate corrupti repellendus hic excepturi enim ea mollitia dolorum
            exercitationem quia modi error. Nobis rem quo iusto quasi totam officiis a blanditiis ut, at minus unde,
            aspernatur qui doloremque. Nihil similique illo, placeat repellat, esse enim amet dolor inventore eos vitae
            aliquid itaque, nemo quam minima. Eveniet est voluptatem esse repellendus molestias architecto laborum dolor
            aut harum dolore modi, natus dolorem, ab tenetur blanditiis itaque nostrum doloremque, neque dolorum labore
            optio maiores! Unde veritatis pariatur magnam iste commodi tempore eaque impedit distinctio perspiciatis,
            quaerat enim mollitia consequuntur porro itaque voluptas accusamus quibusdam eius soluta harum, libero nemo
            voluptatibus qui corrupti eveniet? Itaque totam nulla sit? Tenetur perspiciatis magni asperiores doloremque
            quod. Vel similique cumque voluptatum voluptatem, asperiores aperiam fugiat. Dolorem, laborum! Quis quidem
            minima assumenda illum praesentium quia corrupti, laborum voluptates debitis commodi doloremque ducimus
            accusantium quasi voluptate impedit placeat maiores vel accusamus quod quae inventore dolorem. Perspiciatis
            modi tenetur nisi unde cum perferendis deleniti! Accusantium quis repudiandae obcaecati nemo quasi quidem
            necessitatibus, sapiente veritatis praesentium in omnis ratione nobis ducimus? Quo assumenda perferendis,
            cum saepe rerum pariatur officia nostrum eum voluptate? Alias nesciunt temporibus architecto, quos animi
            aliquid ducimus nisi ab quod molestias. Minima itaque asperiores repudiandae voluptate ullam officiis animi
            soluta accusamus rerum iure quod quia aperiam repellat a in necessitatibus, placeat voluptas assumenda, ipsa
            labore cumque? Id, ut saepe dolorem porro nemo iure, fuga autem cumque deleniti natus, dolore eius aliquid
            libero excepturi quis commodi. Doloremque reprehenderit est quisquam amet? Quidem asperiores laudantium
            totam nemo, explicabo, rem aliquid cumque veniam provident laborum tenetur ipsam, omnis similique sequi
            neque perferendis! Sunt dolorem totam neque ab fuga culpa! Consequuntur labore officiis sed, deleniti
            nostrum ratione! Dolorem nesciunt impedit quos ab magnam laudantium corporis deserunt exercitationem,
            officia quaerat quia beatae doloribus voluptatem sint quis fugit alias ratione eligendi cumque odit!
            Aspernatur commodi cupiditate corrupti facilis eveniet dicta incidunt nostrum itaque, quisquam, veniam
            voluptates in recusandae, necessitatibus saepe. Itaque labore mollitia nemo molestiae quod nobis. Nisi
            quisquam vel, aperiam corrupti velit harum necessitatibus omnis, distinctio ex numquam dignissimos, labore
            blanditiis officia doloremque. Optio et porro quia quod consequatur delectus quidem voluptatibus natus ullam
            perferendis deleniti culpa possimus maiores quam nesciunt sint sequi aliquam numquam, iure nulla. Adipisci
            corporis molestiae itaque saepe pariatur laborum illo non recusandae unde, excepturi eveniet perspiciatis
            eaque rerum animi qui ea. Ipsam voluptas distinctio veniam sint alias provident cumque a aliquid recusandae,
            ipsum exercitationem tenetur consequuntur eligendi hic harum esse, nam aut earum pariatur accusamus!
            Corrupti libero sed, ab molestias blanditiis rerum numquam quod saepe tenetur itaque neque quasi officiis
            reprehenderit atque, nemo exercitationem autem reiciendis sapiente. Commodi error eius beatae aspernatur
            sequi, quos molestiae iure enim officia nostrum amet quaerat, facilis, magni facere. Mollitia vero, qui
            delectus eius cum alias eaque labore quae. Voluptates commodi, quisquam voluptas aut molestias quibusdam
            nihil, ratione iusto asperiores temporibus maxime, consequuntur eaque sint deleniti et? Harum optio
            reiciendis ratione minus! Ex eum tenetur nobis pariatur vero quis deleniti, dignissimos rerum distinctio
            voluptatibus iure animi voluptas incidunt, earum minus dolorem odio labore non, reprehenderit accusantium
            unde exercitationem. Maiores vitae perspiciatis deleniti recusandae harum, ullam alias quasi iusto! Rem sint
            a maxime ea eligendi illum laborum dicta. Eveniet eius architecto a consequatur, vitae nemo quas rerum.
            Quisquam neque placeat error commodi nostrum mollitia molestiae aliquam sapiente ducimus, eaque repellendus
            at fugiat cupiditate minus. Eius facilis eveniet similique quisquam non consequuntur error debitis
            inventore, nesciunt labore voluptatem at laudantium molestiae! Harum quis minus accusamus architecto
            accusantium, neque nostrum suscipit voluptatem hic praesentium labore mollitia eos ullam quas ratione
            fugiat, unde quasi consequatur laborum laboriosam nulla tempore nihil eveniet cumque. Harum atque error
            corporis eum rem molestiae at sunt ratione dolorum id amet in quasi distinctio aspernatur earum nihil porro,
            dolorem mollitia autem ullam impedit quos totam temporibus quae? Sed illo sint suscipit molestiae facilis
            quis molestias aliquid rem est consectetur ipsa voluptatibus vel ipsum accusamus optio voluptas repudiandae
            recusandae harum sequi, iure, laboriosam commodi reiciendis, voluptatum temporibus. Provident tempore eum
            deleniti rem earum ipsum dolores consequatur debitis repudiandae ratione quas, cum, error, nesciunt totam!
            Atque at illum odit. Ipsa aliquam quasi quas dicta delectus quo vel ratione sint dolor mollitia voluptatem,
            illum repellendus facilis, eius impedit neque, consequuntur velit totam nisi ullam rem quos necessitatibus!
            Sunt ipsam quos eligendi earum voluptatem? Laborum error, excepturi tempora numquam architecto distinctio
            voluptate nihil fugiat odit nostrum consectetur sed, libero quia minus, tenetur illum aspernatur accusamus
            inventore dignissimos corporis? Voluptatibus dicta reiciendis ad voluptatem laudantium mollitia debitis
            soluta consequuntur perferendis repellat nobis dolore itaque rerum necessitatibus voluptas recusandae, at,
            eum ab porro amet. Inventore ex fugiat dolor asperiores ab earum ad. Sit quo perspiciatis magni alias
            quaerat magnam expedita rerum mollitia suscipit doloremque quis animi quasi, consequuntur numquam culpa
            beatae eum eos porro tenetur. Soluta repudiandae quasi est eum sit nam similique, ducimus id eius. Eum odit
            distinctio vitae non sed sunt nam saepe quae rerum? Eveniet quos sapiente quibusdam enim reiciendis earum,
            quisquam nobis ullam blanditiis perferendis, fugit aspernatur error? Dolore magni beatae molestias deleniti,
            adipisci perferendis quod facere fugiat debitis nisi maiores blanditiis. Id optio voluptate hic velit
            exercitationem debitis non soluta harum reprehenderit tenetur officiis maxime fuga illo, sapiente eos
            consequatur dicta totam fugit sequi minus accusamus autem. Et, illum nesciunt? Similique alias quo id a!
            Asperiores dolores esse maxime eligendi totam nam sit fugiat fugit iure voluptatem vitae minus tempore et
            illum cum perferendis facilis, veritatis iste animi ab repellat? Quisquam impedit repellendus voluptas
            dolorum incidunt rerum, cum, quam esse dicta itaque, nobis nostrum architecto dignissimos voluptatem in id.
            Officiis hic voluptates, eum consequuntur est cupiditate, delectus ad neque nulla, totam ea! Quia suscipit
            pariatur harum excepturi rem, adipisci nostrum quis ratione nam, est ullam atque ad, error iste sit quaerat
            molestias odit voluptas qui vero laborum ab! Saepe sapiente assumenda, facilis sed tempora aut. Nisi velit
            ipsa autem, at delectus tempora corrupti atque cupiditate, alias, sint eos ipsum quam labore dolorem nobis
            voluptas mollitia officia esse ea vel rerum dolores. Iure fuga quos qui ipsa unde, eaque iusto voluptates
            distinctio ducimus! Tenetur magni tempore esse omnis reiciendis fugit sequi facilis vitae hic, enim sint
            itaque sapiente repudiandae commodi error cum nostrum voluptatem saepe, quibusdam ab. Numquam quod
            reiciendis officiis rem quia quibusdam quasi ratione nisi libero corrupti iure obcaecati cum nam dicta
            quidem, at deleniti. Laboriosam aperiam molestias rerum necessitatibus! Libero iusto culpa natus deleniti
            accusamus iste molestiae, reprehenderit delectus totam quo quos, ullam veritatis fugit amet, nam quia
            laborum. Nobis quas saepe esse illo ipsam quidem rerum debitis consectetur. Incidunt, porro blanditiis? Et
            atque unde at sit modi eius aperiam, iste odit. Ipsam ipsum voluptatum voluptate eaque dolor ab perferendis
            vel aliquam culpa dignissimos placeat numquam laudantium maiores facere aperiam at est obcaecati corporis
            modi, accusamus optio dicta! Ut similique neque quibusdam temporibus voluptates fuga vitae omnis libero ea
            perspiciatis repellat architecto nihil provident error accusantium doloremque sit, sed quaerat vel voluptate
            odit obcaecati rem at? Modi, eveniet? Molestiae cumque odit voluptas veritatis voluptates dicta perferendis
            quaerat! Culpa placeat dolorem temporibus recusandae similique asperiores eius vero reiciendis consectetur
            debitis veniam obcaecati distinctio, molestias ducimus impedit sequi illum. Natus consequatur impedit sint
            exercitationem quibusdam consectetur odit reiciendis minus error repudiandae, fugiat quisquam at alias
            dolores nihil, esse rem molestias eveniet quidem eum, tempora labore voluptate! Suscipit voluptatem ipsum
            possimus saepe nobis quam odio aliquam, laudantium ullam, harum unde quos? Quaerat, animi rerum debitis
            assumenda praesentium ad delectus numquam obcaecati repellendus fuga architecto aliquam, adipisci nesciunt
            autem dolorum vero consequuntur tempore atque doloremque eaque voluptate. Consectetur perferendis quibusdam
            assumenda distinctio id dignissimos quasi ea laboriosam accusantium a reprehenderit asperiores rem sit
            animi, voluptates magnam harum velit nostrum possimus voluptatum vel accusamus ullam. Voluptatibus nobis
            vero tempore libero totam quia repellendus, doloribus mollitia consequatur aliquam quod atque omnis
            aspernatur! Provident quae adipisci, dolore quasi, commodi quaerat fuga molestiae eius suscipit eum
            similique assumenda a quod nobis. Soluta accusantium quo exercitationem possimus enim ad, et aperiam quas
            error facere dolorum rem quis dignissimos ipsum asperiores molestias officiis. Nemo debitis deleniti
            aspernatur commodi dignissimos ipsam aliquid consequatur, nostrum sit nihil sed corporis dolores expedita!
            Ratione ut, suscipit eius architecto placeat iusto officia quo eligendi ipsum magni inventore id, aut itaque
            esse autem. Quaerat, numquam optio delectus, iure ipsa aperiam rerum aliquam tempore aliquid possimus vel?
            Deleniti, tenetur magni est possimus cum excepturi porro neque doloremque aliquid ut vel modi ipsa ab. Odio
            libero saepe blanditiis labore officiis, nulla doloremque suscipit natus autem aliquid, dignissimos aperiam
            ut quia eum, atque tempore ipsa! Sed eligendi autem, blanditiis aspernatur molestias optio voluptatem omnis
            nisi fugiat facilis ipsum cum impedit dolorum tempora mollitia non molestiae sapiente voluptatibus, ea
            facere magnam? Maiores quaerat perferendis obcaecati necessitatibus asperiores omnis corporis nisi? Debitis
            recusandae, consequuntur ullam tenetur quas ratione ipsam repellat commodi, perspiciatis alias amet
            reprehenderit voluptatibus blanditiis? Ab cum ad, ut voluptates sit, soluta esse obcaecati quae nisi quidem
            repudiandae quos ipsum eaque alias? Temporibus at expedita magnam optio molestiae laborum earum iusto
            perferendis iste culpa minus, odio eaque velit quis tenetur ratione dolores amet minima fugit obcaecati
            facilis a! Inventore sint quaerat harum voluptates rem optio odit, mollitia laboriosam expedita voluptatum
            praesentium. Odit modi consequatur rem omnis, cupiditate porro impedit rerum pariatur vel ratione ipsa
            minima quas? Unde soluta quasi minima veritatis vero ipsa tempora, consequuntur magni vitae ad, recusandae
            laboriosam aliquam voluptatem cum ipsum in ea laudantium. Animi minima modi qui doloremque, voluptate
            veritatis. Ipsam earum fuga enim tempora quod! Illum maiores alias nam quae voluptas officiis sunt,
            architecto sint nihil commodi. Ipsum beatae placeat dolorum cumque necessitatibus rem veritatis error et!
            Deleniti esse, dignissimos id inventore ratione error itaque quos sapiente quaerat commodi ipsam ad qui
            reiciendis ipsa quo aperiam tempora nobis dolore delectus. Consectetur sint error dicta reiciendis, alias
            enim. Ab dolore nam perferendis necessitatibus expedita ducimus. Commodi quam dolorum asperiores alias
            dolorem quasi, fugiat praesentium perferendis qui esse ratione fuga, quaerat reprehenderit nesciunt officia
            veniam facere dicta nostrum minima porro sed distinctio. Est non velit explicabo saepe dolorum, laudantium
            quibusdam repellendus repudiandae facere voluptatum cum ratione quod aperiam vero accusamus nulla atque
            excepturi sed? Sunt tenetur dolorum dolores quam quod, ea quo ullam sint ipsum commodi possimus officiis
            aliquam aperiam vero nesciunt perspiciatis dignissimos harum, repellendus dicta quas voluptas nulla veniam
            eaque corporis? Qui explicabo quia similique sunt accusamus, cupiditate omnis accusantium? Labore quae quia,
            ex enim delectus tenetur! Incidunt facilis quaerat eos rem officia veniam, atque, voluptate iusto iure
            veritatis sed quam. Minima facilis molestiae distinctio culpa nisi optio, quod quos illo sed est obcaecati
            dolor odio explicabo temporibus earum. Quo minima assumenda quis numquam dolore deserunt iure tenetur
            doloribus libero consectetur molestias aut animi illo, omnis et atque ad praesentium ex quia laudantium.
            Quibusdam ab quasi illum deleniti impedit consequatur possimus alias nisi.
          </Typography>
        </Container>
      </Layout>
    </TranslationsProvider>
  );
}

{
  /* <Stack direction="row" width="100%" alignItems="center" justifyContent="space-between">
        <h1>{t("title")}</h1>
        <ApplicationChangeLanguage isMain />
      </Stack> */
}
