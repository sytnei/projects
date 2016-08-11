<?php
// src/AppBundle/Controller/ProjectsController.php
namespace AppBundle\Controller;

use AppBundle\Entity\Project;
use AppBundle\Entity\Document;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Response;

class ProjectsController extends Controller
{
    /**
     * @Route("/projects")
     */
    public function indexAction()
    {
    	$projects = $this->getDoctrine()
            ->getRepository('AppBundle:Project')
            ->findBy(array('company_id' => $this->getUser()->getCompanyId()));

        return $this->render('default/projects.html.twig', array(
            'projects' => $projects
        ));
    }
	
    /**
     * @Route("/projects/{slug}")
     */	
	
	public function documentsAction($slug = '')
    {
    	 $project = $this->getDoctrine()
        ->getRepository('AppBundle:Project')
        ->findOneBy(array('slug' => $slug));
		
    	$documents = $this->getDoctrine()
            ->getRepository('AppBundle:Document')
            ->findBy(array('project_id' => $project -> getId()));

        return $this->render('default/documents.html.twig', array(
            'documents' => $documents
        ));
    }
	
	    /**
     * @Route("/document/{slug}")
     */	
	
	public function documentAction($slug = '')
    {
    	 $document = $this->getDoctrine()
        ->getRepository('AppBundle:Document')
        ->findOneBy(array('slug' => $slug));

        return $this->render('default/document_details.html.twig', array(
            'document' => $document
        ));
    }
}

?>